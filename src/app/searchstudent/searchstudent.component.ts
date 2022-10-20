import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  input=""

  readValue=()=>{
    let data={
      "name":this.input,
      "admno":this.input
    }
    console.log(data)
    this.myapi.searchStudent(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}
