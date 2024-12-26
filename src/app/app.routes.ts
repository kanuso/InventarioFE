import { Routes } from '@angular/router';
import { ProductoListarComponent } from './producto-listar/producto-listar.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { VentaProductoComponent } from './venta-producto/venta-producto.component';

export const routes: Routes = [
    {path:'productos', component:ProductoListarComponent},
    {path: '', redirectTo: 'productos', pathMatch:'full'},
    {path: 'agregar-producto', component: AgregarProductoComponent},
    {path: 'editar-producto/:id', component: EditarProductoComponent},
    {path: 'venta-producto', component: VentaProductoComponent},

];
