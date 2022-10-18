import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  facname=""
  dep=""
  designation=""
  dob=""
  qualification=""
  address=""
  mobile=""
  doj=""


  readValue=()=>{
    let data={
      "facname":this.facname,
      "dep":this.dep,
      "designation":this.designation,
      "dob":this.dob,
      "qualification":this.qualification,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
    alert("Successfully added")
    this.facname=""
    this.dep=""
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
