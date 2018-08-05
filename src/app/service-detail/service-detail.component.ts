import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})



export class ServiceDetailComponent implements OnInit {
  
  public Myservice=[];
  constructor(private _service:MyServiceService) { }

  ngOnInit() {

   this.Myservice=this._service.getService();
  }

}
