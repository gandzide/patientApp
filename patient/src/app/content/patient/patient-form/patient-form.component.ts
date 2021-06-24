import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PatientModel } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  patients: PatientModel[] = [];
  subscriptionList: Subscription[] = [];
  
  paramId?: number;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public service: PatientService,
    private routerService: RouterService) {
    this.formGroup = this.formBuilder.group({
      id: null,
      firstname: null,
      lastname: null,
      birthDate: null,
      cnp: null,
      sex: null,
      city: null,
      country: null,
      phone: null
    })
  }

  ngOnInit(): void {

    this.subscriptionList.push(
      this.service.getPatients().subscribe(list => this.patients = list)
      );

    this.routerService.activatedRoute.value.params.pipe(
      filter((param) => !!param.id)
    ).subscribe((param) => {
      this.loadPatient(parseInt(param.id));
      this.paramId = parseInt(param.id);
    })
  }

  private loadPatient(id: number) {
    const editObject = this.patients.find((s) => s.id === id);

    this.formGroup.patchValue({
      id: editObject?.id,
      firstname: editObject?.firstname,
      lastname: editObject?.lastname,
      birthDate: editObject?.birthDate,
      cnp: editObject?.cnp,
      sex: editObject?.sex,
      city: editObject?.city,
      country: editObject?.country,
      phone: editObject?.phone
    })
  }

  goBack() {
    this.routerService.goToPatients();
  }

  savePatient() {
    const patient: PatientModel = {
      id: this.formGroup.value['id'],
      firstname: this.formGroup.value['firstname'],
      lastname: this.formGroup.value['lastname'],
      birthDate: this.formGroup.value['birthDate'],
      cnp: this.formGroup.value['cnp'],
      sex: this.formGroup.value['sex'],
      city: this.formGroup.value['city'],
      country: this.formGroup.value['country'],
      phone: this.formGroup.value['phone']
    }
    if (patient.id) {
      this.service.putPatient(patient).subscribe(() => 
      this.goBack()
      );
    } else {
      this.service.postPatient(patient).subscribe(() =>
      this.goBack()
      );
    }
  }

}
