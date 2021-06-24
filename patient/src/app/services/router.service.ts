import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public activatedRoute: BehaviorSubject<ActivatedRoute> = new BehaviorSubject(this.route);

  goToPatients(){
    this.router.navigate(['patient']);
  }

  goToPatientForm(){
    this.router.navigate(['patient/form']);
  }

  goToAppointments(){
    this.router.navigate([`patient/appointments`]);
  }

  goToAppointmentForm(){
    this.router.navigate([`appointment/form`]);
  }
}
