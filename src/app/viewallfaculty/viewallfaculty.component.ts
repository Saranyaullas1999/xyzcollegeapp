import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor() { }

  facultyData=[{"facname":"Anisha","dep":"ComputerScience & Engineering","designation":"Assistant Professor","dob":"10-11-1980","qualification":"MCA,Phd.Computer Science","address":"axg","mobile":"9787872535","doj":"12-10-2007"},{"facname":"Nitha","dep":"Electronics & Communication Engineering","designation":"Professor","dob":"12-01-1988","qualification":"EEE,Phd.Electronics","address":"fsgs","mobile":"9856457512","doj":"09-09-2009"},{"facname":"Leena","dep":"ComputerScience & Engineering","designation":"Assistant Professor","dob":"21-09-1982","qualification":"M.sc ComputerScience,Phd.Computer Science","address":"hggd","mobile":"9856748956","doj":"22-11-2004"},{"facname":"Deepa","dep":"Civil Engineering","designation":"Professor","dob":"18-11-1988","qualification":"Civil Engineering","address":"ash","mobile":"8599467878","doj":"10-02-2005"},{"facname":"Sreekumar","dep":"ComputerScience & Engineering","designation":"Associate Professor","dob":"22-05-1981","qualification":"MCA","address":"bxy","mobile":"7689786756","doj":"16-08-2008"}]

  ngOnInit(): void {
  }

}
