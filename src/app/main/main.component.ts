/**En Angular, un componente es una pieza fundamental de la interfaz de usuario. Cada componente tiene su propia plantilla HTML, su lógica (en el archivo TypeScript) y sus estilos. El objetivo del código que presentas es obtener datos desde un servicio (en este caso, desde CategoriasServiceService) y asignar esos datos a una propiedad del componente para luego mostrarlos en la vista. */
import { Component, OnInit } from '@angular/core';
/**OnInit es una interfaz que se implementa para ejecutar código cuando el componente se inicie (justo después de crear la instancia del componente). */

//Se importa también los servicios
import { CategoriasServiceService } from 'src/app/categorias-service.service';
import { ActualidadServiceService } from 'src/app/actualidad-service.service';
import { NovedadesServiceService } from 'src/app/novedades-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


/**Se exporta la clase del componente. Además, implementa OnInit, lo que significa que el componente tendrá un método ngOnInit() que se ejecutará después de que Angular haya inicializado el componente. */
export class MainComponent implements OnInit {

  //Propiedad categorias, de tipo array. En ella se guardarán los datos obtenidos
  categorias: any[] = [];
  actualidad: any[] = [];
  novedades: any[] = [];

  /**El constructor del componente inyecta el servicio CategoriasServiceService. Gracias a la Inyección de Dependencias de Angular, no tienes que crear manualmente una nueva instancia del servicio. Angular se encarga de proporcionarte una instancia lista para usar.
private categoriasService: CategoriasServiceService indica que se guarda una referencia a ese servicio en una propiedad interna del componente llamada categoriasService, a la que podrás acceder en la lógica del componente. */  
  constructor(
    private categoriasService: CategoriasServiceService,
    private actualidadService: ActualidadServiceService,
    private novedadesService: NovedadesServiceService
  ) {}


  //El codigo se ejecuta al cargar el componente
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


    this.actualidadService.getActualidad()

    .then((data) => {
      this.actualidad = data;
    })
    .catch(error => {
      console.error('Error al cargar actualidad:', error);
    })

    this.novedadesService.getNovedades()

    .then((data) => {
      this.novedades = data;
    })
    .catch(error => {
      console.error('Error al cargar novedad:', error);
    })

  }


}
