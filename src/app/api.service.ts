import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewStudent=()=>{
    return this.http.get("http://localhost:8080/viewAll")
  }

  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studentEntry",data)

  }

  deleteStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
