/**Aquí se está importando el decorador Injectable desde el núcleo de Angular. Este decorador le indica a Angular que esta clase podrá ser utilizada como un servicio, y que Angular puede gestionar su ciclo de vida e inyectarlo en otros lugares. */
import { Injectable } from '@angular/core';


/**La configuración { providedIn: 'root' } le dice a Angular que este servicio se registre a nivel de la raíz de la aplicación. Esto significa que el servicio estará disponible en cualquier parte de la aplicación sin necesidad de volver a declararlo. Básicamente, se crea una única instancia global del servicio que cualquier componente o servicio puede usar.
 * 
 * Antes de Angular 6, típicamente se tenían que agregar los servicios en el providers de un módulo (por ejemplo, AppModule), pero con providedIn: 'root', ya no es necesario.
 */
@Injectable({
  providedIn: 'root'
})



/**Aquí se define la clase del servicio, llamada CategoriasServiceService. */
export class CategoriasServiceService {

  constructor() { }


  /** fetch es una función nativa de JavasCript que te permite hacer solicitudes HTTP desde el navegador (y también desde otros entornos) sin necesidad de librerías externas. Funciona de manera asíncrona y devuelve una promesa. Cuando la promesa se resuelve, obtienes un objeto Response que representa la respouesta del servidor. A partir de este objeto Response, puedes extraer datos en distintos formatos (como por ejemplo, JSON). */


  
  getCategorias(): Promise<any[]> {
  //Llamada fetch para obtener el JSON.  
    return fetch('assets/data/categorias.json')
    .then(response => {
      // 'response' es el objeto de respuesta que se obtiene del servidor (en este caso, del archivo local)

      if(!response.ok) {
        //Si la respuesta no fue exitosa (codigos 200, 299) lanza un error
        throw new Error('Error al obtener los productos');
      }

      //Si todo va bien, llamamos response.json(), lo que devuelve una nueva promesa.
      return response.json();
    })
    .then(data => {
      //'data' es lo que devuelve resopnse.json(), es decir, el contenido del archivo JSON  parseado a objeto/array.
      // Según tus datos, 'data' será un array de objetos que representan las categorías.


        // Simplemente retornamos 'data' para que el que llame a getCategorias() obtenga el array de categorías.
      return data;
    });
  }
}
