import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
    
  }
  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getProductData(id:string):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
