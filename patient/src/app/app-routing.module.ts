import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './content/appointment/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './content/appointment/appointment-list/appointment-list.component';
import { AppointmentComponent } from './content/appointment/appointment.component';
import { PatientFormComponent } from './content/patient/patient-form/patient-form.component';
import { PatientListComponent } from './content/patient/patient-list/patient-list.component';
import { PatientComponent } from './content/patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patient', component: PatientComponent, children:[
    {path: 'list', component: PatientListComponent},
    {path: 'appointments', component: AppointmentListComponent},
    {path: 'form', component: PatientFormComponent},
    {path: 'form/:id', component: PatientFormComponent},
    {path: '**', redirectTo: '/patient/list'}
  ]},
  {path: 'appointment', component: AppointmentComponent, children:[
    {path: 'list', component: AppointmentListComponent},
    {path: 'form', component: AppointmentFormComponent},
    {path: 'form/:id', component: AppointmentFormComponent},
    {path: '**', redirectTo: '/appointment/list'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
