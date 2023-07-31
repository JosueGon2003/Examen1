import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  Codigoderegistro: string='';
  Fecha: string='';
  Cliente: string='';
  Tipodeinteraccion: string='';
  Descripcion: string='';
  img: string='';
  
  mostrarAviso: boolean = false; // Variable para controlar si se muestra el aviso
  
  
  constructor(private _servicesService: ServiceService,private router: Router){}
  
  insertCallcenter(Codigoderegistro:string, Fecha:string, Cliente:string,Tipodeinteraccion:string,Descripcion:string,img:string){
    this._servicesService.insertarCallcenter(
      this.Codigoderegistro,
      this.Fecha,
      this.Cliente,
      this.Tipodeinteraccion, 
      this.Descripcion,
      this.img.replaceAll('\\','/'));
    console.log(this.img);
    this.mostrarAviso = true; // Mostrar el aviso después de guardar la información
  
    // Opcional: Ocultar el aviso después de unos segundos (por ejemplo, 5 segundos)
    setTimeout(() => {
      this.mostrarAviso = false;
    }, 5000); // 5000 ms = 5 segundos
    console.log(this.img);
  
    // Vaciar los campos después de guardar la información
    this.Codigoderegistro= '';
      this.Fecha= '';
      this.Cliente= '';
      this.Tipodeinteraccion= ''; 
      this.Descripcion= '';
      this.img= '';
    
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.img = URL.createObjectURL(file); // Convertir el archivo en una URL válida para la imagen.
    }
  }

  ngOnInit(): void {
  }

  onClick() {
    this._servicesService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
