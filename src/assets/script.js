fetch('http://worldtimeapi.org/api/timezone/Europe/Madrid')
  .then(response => response.json())
  .then(data => {
    const dateTime = new Date(data.datetime);

    const fecha = dateTime.toLocaleDateString('es-ES');
    const hora = dateTime.toLocaleTimeString('es-ES');

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Fecha en España: ${fecha}<br>Hora en España: ${hora}`;
  })
  .catch(error => {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Error al obtener la fecha y hora de España: ${error}`;
  });
