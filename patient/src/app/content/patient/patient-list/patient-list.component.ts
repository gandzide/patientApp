import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientModel } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  subscriptionList: Subscription[] = [];
  patients: PatientModel[] = [];

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'gender', 'city', 'country', 'actions'];
  
  constructor(private routerService: RouterService, public service: PatientService) { 

  }

  ngOnInit(): void {;
    this.subscriptionList.push(
      this.service.getPatients().subscribe(list => this.patients = list)
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

  onDeleteClick(id: number){
    this.service.deletePatient(id).subscribe(() => this.patients =  this.patients.filter((item) => item.id != id));
  }

  onUpdateClick(id: number){
    this.routerService.goToPatientForm();
  }

  viewAppointments(){
    this.routerService.goToAppointments();
  }
}
