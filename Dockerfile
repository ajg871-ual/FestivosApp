# Etapa de construcción
FROM node:18.16.0 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Etapa de producción
FROM nginx:1.21.6

COPY --from=build-step /app/dist/aplicacion /usr/share/nginx/html

EXPOSE 8080
