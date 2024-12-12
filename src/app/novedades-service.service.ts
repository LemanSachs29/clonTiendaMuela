import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovedadesServiceService {

  constructor() { }

  getNovedades(): Promise<any[]> {
    return fetch('assets/data/novedades.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las novedades');
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }
}
