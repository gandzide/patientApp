import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientModel } from '../models/patient.model';
import { ApiRequestService } from './api-request.service';
import { Api } from './api.enum';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private apiService: ApiRequestService) { }

  getPatients(): Observable<PatientModel[]>{
    return this.apiService.submitGetRequest(Api.GET_PATIENT);
  }

  postPatient(patient: PatientModel): Observable<PatientModel>{
    return this.apiService.submitPostRequest(Api.CREATE_PATIENT, patient);
  }

  putPatient(patient: PatientModel): Observable<PatientModel>{
    return this.apiService.submitPutRequest(Api.UPDATE_PATIENT + patient.id, patient);
  }

  deletePatient(patientId: number) {
    return this.apiService.submitDeleteRequest(Api.DELETE_PATIENT + patientId);
    }

}
