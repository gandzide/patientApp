import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TeacherModel } from 'src/app/models/teacher.model';
import { dataSource, teachers } from '../teacher.component';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  paramId? : number;
  formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.formGroup = this.formBuilder.group({
      position: null,
      firstname: null,
      lastname: null,
      cnp: null,
      salary: null,
      faculty: null
    })
  }

  ngOnInit(): void {
    this.route.params.pipe(
      filter((param) => !!param.id)
    ).subscribe((param)=>{
      this.loadUniversity(parseInt(param.id));
      this.paramId = parseInt(param.id);
    })
  }

  private loadUniversity(id: number){
    console.log(id);
    const editObject = teachers.find((univ) => univ.position === id );

    this.formGroup.patchValue({
      position: editObject?.position,
      firstname: editObject?.firstname,
      lastname: editObject?.lastname,
      cnp: editObject?.cnp,
      salary: editObject?.salary,
      faculty: editObject?.faculty
    })
  }

  goBack(){
    this.router.navigate(['teacher'])
  }

  saveUniversity(){
    const teacher = this.formGroup.value;
    if (teacher.city == '' || teacher.name == '') {
      alert('Campurile trebuie sa fie completate.')
      return;
    }

    let index = -1;
    if (!!this.paramId){
      const editObject = teachers.find((t) => t.position === this.paramId );
      if(!!editObject){
        index = teachers.indexOf(editObject);
        teachers[index] = teacher;
        dataSource.data = teachers;
      }
      return;
    }

    teachers.push(new TeacherModel(teachers[teachers.length - 1].position + 1, teacher.firstname, teacher.lastname,
      teacher.cnp, teacher.salary, teacher.faculty));
    dataSource.data = teachers;
    
    this.goBack();
  }

}
