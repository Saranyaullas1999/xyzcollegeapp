import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {

  constructor() { }


  studentData=[{"name":"Sarath","rollno":"54","admno":"1245","college":"Rajagiri College","department":"ComputerScience & Engineering","bloodgroup":"A+","dob":"06-03-1994","parentname":"Sundar","email":"sundar18@gmail.com","guardianname":"Mini","address":"xyz"},{"name":"Sneha","rollno":"64","admno":"1875","college":"St.Joseph College","department":"Civil Engineering","bloodgroup":"B+","dob":"06-03-2000","parentname":"Shaji","email":"shaji91@gmail.com","guardianname":"Suma","address":"abc"},{"name":"Reshij","rollno":"48","admno":"3286","college":"Rajagiri College","department":"Electonics & Communication Engineering","bloodgroup":"AB+","dob":"19-04-1999","parentname":"Murali","email":"murail8@gmail.com","guardianname":"Sushama","address":"asd"},{"name":"Vishnu","rollno":"79","admno":"1980","college":"St.Thomas College","department":"Mechanical Engineering","bloodgroup":"A+","dob":"09-08-1993","parentname":"Subramanian","email":"subramanian01@gmail.com","guardianname":"Sharada","address":"lkf"},{"name":"kavya","rollno":"34","admno":"5647","college":"Rajagiri College","department":"Biotechnology Engineering","bloodgroup":"O+","dob":"01-12-1997","parentname":"Menon","email":"menon10@gmail.com","guardianname":"Asha","address":"myz"},{"name":"Anand","rollno":"12","admno":"3213","college":"Vidya College","department":"Civil Engineering","bloodgroup":"O+","dob":"02-10-1999","parentname":"Radhakrishnan","email":"radhakrishnan67@gmail.com","guardianname":"Sandhya","address":"qwe"}]
  ngOnInit(): void {
  }

}
