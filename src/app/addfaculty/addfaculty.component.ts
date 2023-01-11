import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  department=""
  designation=""
  dob=""
  qualification=""
  address=""
  mobile=""
  doj=""


  readValue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "qualification":this.qualification,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
    alert("Successfully added")
    this.myapi.addFaculty(data).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    this.name=""
    this.department=""
    this.designation=""
    this.dob=""
    this.qualification=""
    this.address=""
    this.mobile=""
    this.doj=""
  }

  ngOnInit(): void {
  }

}
