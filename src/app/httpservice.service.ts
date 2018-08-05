import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ipost} from './post';
import {Observable,throwError,of} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})



export class HTTPserviceService {

private _url : string ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts():Observable<Ipost[]>{ 

     return this.http.get<Ipost[]>(this._url);
/*     .pipe(
         
         catchError(error=>{

           return throwError("something went wrong")
         })
     ) */
              
  }

/*
 private handleError(error:HttpErrorResponse){

   return  throwError(

      `something went wrong : ${error.message}`
   )

 }

*/

}
