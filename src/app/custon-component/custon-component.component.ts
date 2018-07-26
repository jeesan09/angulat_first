import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-custon-component',
  templateUrl: './custon-component.component.html',
  styleUrls: ['./custon-component.component.css']
})




export class CustonComponentComponent implements OnInit {
  

  public  customTitle = 'Custom componet called form Root Component AS a variable';
  public toggler=true;
  public texttoggeler=true;

  constructor() { }

  ngOnInit() {
  }

}
