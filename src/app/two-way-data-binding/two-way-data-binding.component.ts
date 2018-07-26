import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})




export class TwoWayDataBindingComponent implements OnInit {
  public input="";

    public cssob={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#fff9c9",
	padding: "15px"
  }
  constructor() { }

  ngOnInit() {
  }

}
