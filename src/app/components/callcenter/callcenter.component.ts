import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.component.html',
  styleUrls: ['./callcenter.component.css']
})
export class CallcenterComponent {
  callcenter:any={};
  constructor(private activatedRoute: ActivatedRoute, private  _servicesService: ServiceService){
    this.activatedRoute.params.subscribe(params =>{
      this.callcenter= _servicesService.getCallcenters(params['id']);
      console.log(this.callcenter);
    })
  }
}
