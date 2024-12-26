import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
producto: Producto = new Producto();
id: number;
  

constructor(private productoServicio: ProductoService,
 private ruta: ActivatedRoute, private enrutador: Router
){}
ngOnInit(){
  this.id = this.ruta.snapshot.params['id'];
  this.productoServicio.optenerProductoPorId(this.id).subscribe(
    {
      next: (datos) => this.producto = datos
      ,
      error:(erroes: any)=> console.log(erroes)
    }
  );
}
onSubmit() {
  this.guardarProducto();
};
guardarProducto(){
  this.productoServicio.editarProducto(this.id, this.producto).subscribe(
    {
      next: (datos)=>{
        this.irListaProductos();
      },
      error: (error:any )=> {console.log(error)}
    }
  );
}
irListaProductos(){
  this.enrutador.navigate(['/productos'])
}
}
