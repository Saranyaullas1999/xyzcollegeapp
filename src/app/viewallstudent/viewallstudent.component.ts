import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewStudent().subscribe(
      (data)=>{
        this.studentData=data
      }
    )
  }

  deleteStudents=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteStudent(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
  }

  studentData:any=[]
  ngOnInit(): void {
  }

}
