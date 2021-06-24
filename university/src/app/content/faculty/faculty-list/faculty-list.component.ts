import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { dataSource, faculties } from '../faculty.component';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'university', 'actions'];

  dataSource = dataSource;
  faculties = faculties;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  onDeleteClick(i:number){
    this.faculties = this.faculties.filter(faculty => faculty.position !== i);
    this.dataSource.data = this.faculties;
  }

  onUpdateClick(id:string){
    this.router.navigate([`faculty/form/${id}`]);
  }

}
