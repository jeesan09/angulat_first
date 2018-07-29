import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})






export class AppComponent {
  title = 'Jeesan ';
  public dataMain="(Data From App Component)";
  public messege="";


  public styleBinding="center";

  public rooth2={
    border: "1px solid black",
	textAlign: "center",
	backgroundColor: "#9bd5ff",
	padding: "15px"
  }
}
