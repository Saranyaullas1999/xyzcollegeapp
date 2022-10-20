import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewFaculty().subscribe(
      (data)=>{
        this.facultyData=data
      }
    )
  }

  deleteFaculty=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteFaculty(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
  }

  facultyData:any=[]

  ngOnInit(): void {
  }

}
