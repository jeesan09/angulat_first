import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-interpoletion',
  templateUrl: './interpoletion.component.html',
  styleUrls: ['./interpoletion.component.css']
})




export class InterpoletionComponent implements OnInit {
   
  public variable='Interpolation Component';
  
  public string="String concatination example";

  public success=true;
  public danger=false;
  public italic=true;
  

  public centervar="center";

  public classBindingObject={

   "success": this.success,
   "italic":this.italic,
   "danger":this.danger

  }
 

  constructor() { }

  ngOnInit() {
  }

  myfunction(){
    
  
    return "My Function Called"+"   "+this.string;;
  }

}
