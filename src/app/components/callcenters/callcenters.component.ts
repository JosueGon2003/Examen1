import { Component } from '@angular/core';
import { Callcenter, ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callcenters',
  templateUrl: './callcenters.component.html',
  styleUrls: ['./callcenters.component.css']
})
export class CallcentersComponent {
  callcenters: Callcenter[] = [];
  constructor(public _servicesService: ServiceService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.callcenters = this._servicesService.getCallcenter();
    console.log(this.callcenters)
    
  }
  vercallcenter(idx: Callcenter) {
    console.log(idx);
    this.router.navigate(['/callcenter', this.callcenters.indexOf(idx)]);
  }
}
