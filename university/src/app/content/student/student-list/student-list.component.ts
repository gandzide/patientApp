import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentModel } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  subscriptionList: Subscription[] = [];
  students: StudentModel[] = [];

  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'faculty','actions'];
  
  constructor(private router:Router, public service:StudentService) { 

  }

  ngOnInit(): void {;
    this.subscriptionList.push(
      this.service.getStudents().subscribe(list => this.students = list)
      );
  }

  ngAfterViewInit(){
    //this.service.studentList.value.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    });
  }

  onDeleteClick(id:number){
    this.service.deleteStudent(id).subscribe(() => this.students =  this.students.filter((item) => item.id != id));
  }

  onUpdateClick(id:string){
    this.router.navigate([`student/form/${id}`]);
  }


}
