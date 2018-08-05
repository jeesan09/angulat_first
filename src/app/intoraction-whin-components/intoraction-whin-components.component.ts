import { Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-intoraction-whin-components',
  templateUrl: './intoraction-whin-components.component.html',
  styleUrls: ['./intoraction-whin-components.component.css']
})








export class IntoractionWhinComponentsComponent implements OnInit {
  
  public AppcomponentData="Data from Intoraction Component";


  @Input('parentData') public ChildComponetparentData;
  @Input('toggleAppComponent') public togglefromAppData;

  @Output() public chidEventEmitter=new EventEmitter();

  public centervar="center";

  public rooth2={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#ffaaaa",
	padding: "15px"
  }
   
  constructor() { }

  ngOnInit() {
  }
   appComponentCall(){

 
    //console.log(this.togglefromAppData); 

    if(this.togglefromAppData=="") {

        this.chidEventEmitter.emit('Intoraction Component Data');

    }

     else{
            
              this.chidEventEmitter.emit('');
              console.log("in else part"); 

     }
  


  
   }



}
