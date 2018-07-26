import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})



export class EventBindingComponent implements OnInit {
    
  public  colortoggeler=true;
  public cssob={


  border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#f6b2ff",
	padding: "15px"


  }

  constructor() { }

  ngOnInit() {


  }


  changeColour()
  {

       console.log('functon called');
       var innertext= document.getElementById("colorChange").innerHTML ;
       console.log(innertext);

      if(innertext=="Event Binding component")
      {
   
       	document.getElementById("colorChange").innerHTML="Button clicked" ;
        this.colortoggeler=false;
    
 
      }

      else
      {
         document.getElementById("colorChange").innerHTML="Event Binding component"
         this.colortoggeler=true;
      }



}
