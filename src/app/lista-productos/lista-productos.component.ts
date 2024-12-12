import { Component, OnInit } from '@angular/core';

/**Proporciona acceso a información sobre una ruta asociada a un componente cargado. Es útil para acceder a parámetros de la URL, datos de la ruta, etc */
import { ActivatedRoute } from '@angular/router';

/** Importas el servicio que has creado para manejar operaciones relacionadas con los productos. */
import { ProductosServiceService } from 'src/app/productos-service.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit{

  productos: any[] = [];
  id_categoria: number = 0;

  constructor(
    private route: ActivatedRoute, // Para obtener el parámetro de la URL
    private productosService: ProductosServiceService // Servicio para obtener los productos
  ) {}


  /**Metodo se encargad de obtener todos los producots y luego filtrar aquellos que pertenecen a a la categoría especificada por parámetro. No devuelve nada */
  cargarProductosPorCategoria(id_categoria: number): void {
    this.productosService.getProductos()
      .then((data) => {
        // Filtrar los productos según el id de la categoría
        this.productos = data.filter(producto => producto.id_categoria === id_categoria);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      });
  }

  ngOnInit(): void {
    // Obtener el parámetro `id_categoria` desde la URL
    this.route.params.subscribe(params => {
      this.id_categoria = +params['id_categoria']; // Convertir el parámetro a número
      this.cargarProductosPorCategoria(this.id_categoria);
    });
  }


}
