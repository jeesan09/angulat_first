import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {
  
  public tsvar=["red","green","blue"];


    public rooth2={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#9bd5ff",
	padding: "15px"
  }
  constructor() { }

  ngOnInit() {
  }

}
