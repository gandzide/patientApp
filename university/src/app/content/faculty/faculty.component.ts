import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FacultyModel } from 'src/app/models/faculty.model';

export let faculties: FacultyModel[] = [
  {position: 1, name: 'Universitatea Transilvania', university: 'U1'},
  {position: 2, name: 'Universitatea Babes-Bolyai', university: 'U2'},
  {position: 3, name: 'Universitatea Alexandru Ioan', university: 'U3'},
  {position: 4, name: 'Universitatea de Vest', university: 'U4'},
  {position: 5, name: 'Universitatea din Craiova', university: 'U5'},
  {position: 6, name: 'Universitatea Lucian Blaga', university: 'U6'},
];

export let dataSource: MatTableDataSource<FacultyModel>;

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

export class FacultyComponent {

  constructor(private router:Router){
    dataSource = new MatTableDataSource<FacultyModel> (faculties)
  }

  addUniversity():void{
    this.router.navigate([`faculty/form`]);
  }
}
