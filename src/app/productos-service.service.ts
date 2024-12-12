import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor() { }

  getProductos(): Promise<any[]> {
    return fetch('assets/data/productos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }


}
