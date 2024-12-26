import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { CommonModule, NgForOf } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-producto-listar',
  standalone: true,
  imports: [ NgForOf,AgregarProductoComponent],
  templateUrl: './producto-listar.component.html',
})
export class ProductoListarComponent {

  productos: Producto[];
  constructor(private productoServicio: ProductoService,
    private enrutador:Router){}

  ngOnInit(){
    this.obteneProductos();
  }
  private obteneProductos(){
    this.productoServicio.optenerProductosLista().subscribe(
      ((datos: Producto[]) => {
        this.productos = datos;
        console.log('Datos recibidos:', this.productos);
      })
    );

  }

  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto',id])
    }
  
    eliminarProducto(id: number) {
      this.productoServicio.eliminarProducto(id).subscribe(
        {
          next: (datos) => this.obteneProductos(),
          error: (error:any )=> {console.log(error)}
        }
      );
      }
    
      navegarAgregarProducto(){
        this.enrutador.navigate(['agregar-producto'])
      }

}
