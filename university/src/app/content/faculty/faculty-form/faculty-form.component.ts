import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FacultyModel } from 'src/app/models/faculty.model';
import { dataSource, faculties } from '../faculty.component';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.scss']
})
export class FacultyFormComponent implements OnInit {
  paramId? : number;
  formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.formGroup = this.formBuilder.group({
      position: null,
      name: null,
      university: null
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
    const editObject = faculties.find((univ) => univ.position === id );

    this.formGroup.patchValue({
      position: editObject?.position,
      name: editObject?.name,
      city: editObject?.university
    })
  }

  goBack(){
    this.router.navigate(['faculty'])
  }

  saveUniversity(){
    const faculty = this.formGroup.value;
    if (faculty.city == '' || faculty.name == '') {
      alert('Campurile trebuie sa fie completate.')
      return;
    }

    let index = -1;
    if (!!this.paramId){
      const editObject = faculties.find((univ) => univ.position === this.paramId );
      if(!!editObject){
        index = faculties.indexOf(editObject);
        faculties[index] = faculty;
        dataSource.data = faculties;
      }
      return;
    }

    faculties.push(new FacultyModel(faculties[faculties.length - 1].position + 1, faculty.name, faculty.university));
    dataSource.data = faculties;
    
    this.goBack();
  }


}
