import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  ModelTitle:string;
  ActivateAddEditEmpComp:boolean=false;  
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();    
  }

  addClick() {    
    this.emp={
      Name: "",
      BirthDate:"",
      EmployeeType: "",
      TIN:0,
      Salary: 0,
      Leaves:0,
      WorkingDays:0

    }
    this.ModelTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;

  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }



  editClick(item) {
    this.emp = item;
    this.ModelTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }



  refreshEmpList() {    
    this.service.getEmpList().subscribe(data => {
    this.EmployeeList = data;
    });

      
  }

}
