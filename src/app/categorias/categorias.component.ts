
//Importamos OnInit
import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { CategoriasServiceService } from 'src/app/categorias-service.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  categorias: any[] = [];

  constructor(private categoriasService: CategoriasServiceService) {}

  ngOnInit(): void {

    //llama al método creado en el servicio
    this.categoriasService.getCategorias()

    //Se resuelve la promesa y se guardan los datos en la propiedad categorias
    .then((data) => {
      this.categorias = data;
    })
    .catch(error => {
      console.error('Error al cargar categorias:', error);
    });

  }

}
