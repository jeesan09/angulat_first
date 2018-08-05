import { Component, OnInit } from '@angular/core';
import { HTTPserviceService } from '../httpservice.service';

@Component({
  selector: 'app-httpcomponent',
  templateUrl: './httpcomponent.component.html',
  styleUrls: ['./httpcomponent.component.css']
})




export class HTTPcomponentComponent implements OnInit {

 public posts=[];

  constructor(private _service:HTTPserviceService) { }

  ngOnInit() {
  
      this._service.getPosts()
      .subscribe(data => this.posts= data);

  }

}
