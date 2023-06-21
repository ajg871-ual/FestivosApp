const axios = require('axios');
const cheerio = require('cheerio');

const obtenerHoraEspaña = async () => {
  try {
    // Realizar solicitud HTTP a la página web
    const response = await axios.get('https://www.timeanddate.com/worldclock/spain/madrid');
    const html = response.data;

    // Analizar el HTML con cheerio
    const $ = cheerio.load(html);

    // Obtener la hora de España
    const hora = $('#ct').text();

    return hora;
  } catch (error) {
    console.error('Error al obtener la hora de España:', error.message);
    return null;
  }
};

obtenerHoraEspaña().then(horaEspaña => {
  if (horaEspaña) {
    console.log('Hora de España:', horaEspaña);
  }
});
