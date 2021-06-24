import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent {

  constructor(private router:Router, private routerService: RouterService){
  }

  addStudent():void{
    this.routerService.goToStudentForm();
  }

}
