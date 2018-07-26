import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-component',
  templateUrl: './ng-template-component.component.html',
  styleUrls: ['./ng-template-component.component.css']
})






export class NGTemplateComponentComponent implements OnInit {
   
  public toggle=true;

  public classBindingstyle={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#f9f495",
	padding: "15px"
  }
  constructor() { }

  ngOnInit() {
  }


  hideshow(){


    if(this.toggle==true){
        this.toggle=false;
          document.getElementById("toggle_btn").innerHTML="Show" ;
    }
   else{

      this.toggle=true;

        document.getElementById("toggle_btn").innerHTML="Hide" ;
   }
 
  }




}
