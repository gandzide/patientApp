import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TeacherModel } from 'src/app/models/teacher.model';

export let teachers: TeacherModel[] = [
  {
    position: 1, 
    firstname: 'Sasu',
    lastname: 'E naspa', 
    cnp: 'somecnp',
    salary: 3500,
    faculty: 'Facultatea de IA jur'
  },

  {
    position: 2, 
    firstname: 'de Paler',
    lastname: 'ne place', 
    cnp: 'somecnp',
    salary: 3500,
    faculty: 'Facultatea de PQPQPQPQPQP'
  }
  
];

export let dataSource: MatTableDataSource<TeacherModel>;


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {

  constructor(private router:Router){
    dataSource = new MatTableDataSource<TeacherModel>(teachers)
  }

  addTeacher():void{
    this.router.navigate([`teacher/form`]);
  }
}
