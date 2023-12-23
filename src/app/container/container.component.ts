import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit{
  @ContentChild(EmployeeComponent) employeeComp!: EmployeeComponent;
  ngAfterContentInit(): void {
      this.employeeComp.empName = "Peter Parker";
  }
}
