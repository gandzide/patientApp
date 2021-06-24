import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { dataSource, universities } from '../university.component';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'city', 'actions'];

  dataSource = dataSource;
  universities = universities;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  onDeleteClick(i:number){
    this.universities = universities.filter(u => u.position !== i);
    this.dataSource.data = this.universities;
  }

  onUpdateClick(id:string){
    this.router.navigate([`university/form/${id}`]);
  }

}
