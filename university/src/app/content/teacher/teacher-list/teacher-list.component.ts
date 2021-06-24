import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { dataSource, teachers } from '../teacher.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'faculty','actions'];

  dataSource = dataSource;
  teachers = teachers;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  onDeleteClick(i:number){
    this.teachers = this.teachers.filter(teacher => teacher.position !== i);
    this.dataSource.data = this.teachers;
  }

  onUpdateClick(id:string){
    this.router.navigate([`teacher/form/${id}`]);
  }


}
