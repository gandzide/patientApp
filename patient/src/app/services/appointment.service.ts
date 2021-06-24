import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModel } from '../models/appointment.model';
import { ApiRequestService } from './api-request.service';
import { Api } from './api.enum';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private apiService: ApiRequestService) { }

  getAppointments(): Observable<AppointmentModel[]>{
    return this.apiService.submitGetRequest(Api.GET_APPOINTMENT);
  }

  postAppointment(appointment:AppointmentModel): Observable<AppointmentModel>{
    return this.apiService.submitPostRequest(Api.CREATE_APPOINTMENT, appointment);
  }

  putAppointment(appointment:AppointmentModel): Observable<AppointmentModel>{
    return this.apiService.submitPutRequest(Api.UPDATE_APPOINTMENT + appointment.id, appointment);
  }

  deleteAppointment(appointmentId:number) {
    return this.apiService.submitDeleteRequest(Api.DELETE_APPOINTMENT + appointmentId);
  }
}

