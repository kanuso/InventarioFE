import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {ProductoListarComponent} from '../app/producto-listar/producto-listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductoListarComponent, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'inventarios-app';
}
