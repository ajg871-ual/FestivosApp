import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FechaHoraService {
  private url = 'http://worldtimeapi.org/api/timezone/Europe/Madrid';

  constructor() { }

  async getFechaHora(): Promise<any> {
    try {
      const response = await axios.get(this.url);
      const data = response.data;

      const fecha = data.date;
      const hora = data.time;

      const fechaHoraData = {
        fecha,
        hora
      };

      return fechaHoraData;
    } catch (error: any) {
      console.error('Error al obtener la fecha y hora de España:', error.message);
      return null;
    }
  }
}
