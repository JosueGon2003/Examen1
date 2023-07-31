import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  filtro: string = '';

  constructor(private servicesService: ServiceService, private router:Router) {}

  actualizarFiltro(valor:string){
    this.filtro=valor;
  }

  SearchText(dato:any) {
    this.servicesService.search= dato;
    console.log(this.filtro)
  }
}
