import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StudentModel } from 'src/app/models/student.model';
import { UniversityModel } from 'src/app/models/university.model';
import { RouterService } from 'src/app/services/router.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  students: StudentModel[] = [];
  subscriptionList: Subscription[] = [];
  
  paramId?: number;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public service:StudentService,
    private routerService: RouterService) {
    this.formGroup = this.formBuilder.group({
      id: null,
      firstName: null,
      lastName: null,
      cnp: null,
      facultyId: null
    })
  }

  ngOnInit(): void {

    this.subscriptionList.push(
      this.service.getStudents().subscribe(list => this.students = list)
      );

    this.routerService.activatedRoute.value.params.pipe(
      filter((param) => !!param.id)
    ).subscribe((param) => {
      this.loadUniversity(parseInt(param.id));
      this.paramId = parseInt(param.id);
    })
  }

  private loadUniversity(id: number) {
    const editObject = this.students.find((s) => s.id === id);

    this.formGroup.patchValue({
      id: editObject?.id,
      firstname: editObject?.firstName,
      lastname: editObject?.lastName,
      cnp: editObject?.cnp,
      faculty: editObject?.facultyId
    })
  }

  goBack() {
    this.routerService.goToStudent();
  }

  saveUniversity() {
    const student: StudentModel = {
      id: this.formGroup.value['id'],
      firstName: this.formGroup.value['firstName'],
      lastName: this.formGroup.value['lastName'],
      cnp: this.formGroup.value['cnp'],
      facultyId: this.formGroup.value['facultyId']
    }
    if (student.id) {
      this.service.putStudent(student).subscribe(() => 
      this.goBack()
      );
    } else {
      this.service.postStudent(student).subscribe(() =>
      this.goBack()
      );
    }
  }
}
