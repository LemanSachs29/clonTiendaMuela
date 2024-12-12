import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
  { path: 'Main', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'lista-productos', component: ListaProductosComponent},
  { path: 'ficha-producto', component: FichaProductoComponent},
  { path: 'categorias', component: CategoriasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
