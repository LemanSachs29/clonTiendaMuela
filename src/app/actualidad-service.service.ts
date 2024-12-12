import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualidadServiceService {

  constructor() { }


  getActualidad(): Promise<any[]> {
    return fetch('assets/data/actualidad.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las noticias');
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }
}
