import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  get(url:string):Observable<any>{
    return this.http.get(environment.serviceUrl+url)
  }

  post(url:string, data:any):Observable<any>{
    return this.http.post(environment.serviceUrl+url, data)
  }
  
}
