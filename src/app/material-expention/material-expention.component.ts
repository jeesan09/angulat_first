import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-expention',
  templateUrl: './material-expention.component.html',
  styleUrls: ['./material-expention.component.css']
})
export class MaterialExpentionComponent implements OnInit {
  
    public tsvar=["red","green","blue","white"];

    public MypanelHeading="Dynamic Panel heading"
    public panelDescription="Dynamic Panel Description"
  constructor() { }

  ngOnInit() {
  }

}
