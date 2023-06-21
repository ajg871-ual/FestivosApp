import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private url = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient) { }

  obtenerFestivos() {
    const params = new HttpParams()
      .set('api_key', '066ba7990b06f0de76babf66d17e9849212917c5')
      .set('country', 'ES')
      .set('year', new Date().getFullYear().toString());

    return this.http.get<any[]>(this.url, { params });
  }
}
