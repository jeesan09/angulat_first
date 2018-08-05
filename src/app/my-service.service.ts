import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class MyServiceService {

  constructor() { }

  getService(){

   return[

  {"name": "jeesab","age":30,"occupation":"programer"},
  {"name": "soyb","age":30,"occupation":"politisian"},
  {"name": "jamal","age":30,"occupation":"vegabond"},
  {"name": "Bond","age":30,"occupation":"dedective"}



   ];


  }

}
