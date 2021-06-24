import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UniversityModel } from 'src/app/models/university.model';

export let universities: UniversityModel[] = [
  {position: 1, name: 'Universitatea Transilvania', city: 'Brasov'},
  {position: 2, name: 'Universitatea Babes-Bolyai', city: 'Cluj'},
  {position: 3, name: 'Universitatea Alexandru Ioan Cuza', city: 'Iasi'},
  {position: 4, name: 'Universitatea de Vest', city: 'Timisoara'},
  {position: 5, name: 'Universitatea din Craiova', city: 'Craiova'},
  {position: 6, name: 'Universitatea Lucian Blaga', city: 'Sibiu'},
];

export let dataSource: MatTableDataSource<UniversityModel> ;

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {

  constructor(private router:Router){
    dataSource = new MatTableDataSource<UniversityModel> (universities)
  }

  addUniversity():void{
    this.router.navigate([`university/form`]);
  }

  
}



 



 



