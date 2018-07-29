import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})






export class PipingComponent implements OnInit {


  public rooth2={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#d4ffba",
	padding: "15px"
  }

  constructor() { }
  
  ngOnInit() {
  }
 
 public date = new Date();



}
