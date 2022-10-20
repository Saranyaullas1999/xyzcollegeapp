import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  rollno=""
  admno=""
  college=""
  department=""
  bloodgroup=""
  dob=""
  parentname=""
  email=""
  guardianname=""
  address=""

  readValue=()=>{
    let data={
      "name":this.name,
  "rollno":this.rollno,
  "admno":this.admno,
  "college":this.college,
  "department":this.department,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "parentname":this.parentname,
  "email":this.email,
  "guardianname":this.guardianname,
  "address":this.address
    }
    console.log(data)
    alert("Successfully Added")
    this.myapi.addStudent(data).subscribe(
      (res)=>{
        console.log(res)
      }
    )

    this.name=""
    this.rollno=""
    this.admno=""
    this.college=""
    this.department=""
    this.bloodgroup=""
    this.dob=""
    this.parentname=""
    this.email=""
    this.guardianname=""
    this.address=""

  }

  

  ngOnInit(): void {
  }

}
