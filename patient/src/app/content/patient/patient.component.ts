import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private router:Router, private routerService: RouterService) { }

  ngOnInit(): void {
  }

  addPatient():void{
    this.routerService.goToPatientForm();
  }
}
