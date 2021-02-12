import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() emp: any;
  Name: string;
  BirthDate: Date;
  TIN: number;
  EmployeeType: string;
  Salary: number;
  Leaves: number;
  WorkingDays: number;

  ngOnInit(): void {
    this.Name = this.emp.Name;
    this.BirthDate = this.emp.BirthDate;
    this.TIN = this.emp.TIN;
    this.Salary = this.emp.Salary;
    this.EmployeeType = this.emp.EmployeeType;
    this.Leaves = this.emp.Leaves;
    this.WorkingDays = this.emp.WorkingDays;
  }

  addEmployee() {
    var val = {
      Name: this.Name,
      BirthDate: this.BirthDate,
      TIN: this.TIN,
      EmployeeType: this.EmployeeType,
      Leaves: this.Leaves,
      WorkingDays: this.WorkingDays
    };
    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());

    });


  }

}
