import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UniversityModel } from 'src/app/models/university.model';
import { dataSource, universities } from '../university.component';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.scss']
})
export class UniversityFormComponent {

  paramId? : number;
  formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.formGroup = this.formBuilder.group({
      position: null,
      name: null,
      city: null
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
    const editObject = universities.find((univ) => univ.position === id );

    this.formGroup.patchValue({
      position: editObject?.position,
      name: editObject?.name,
      city: editObject?.city
    })
  }

  goBack(){
    this.router.navigate(['university'])
  }

  saveUniversity(){
    const university = this.formGroup.value;
    if (university.city == '' || university.name == '') {
      alert('Campurile trebuie sa fie completate.')
      return;
    }

    let index = -1;
    if (!!this.paramId){
      const editObject = universities.find((univ) => univ.position === this.paramId );
      if(!!editObject){
        index = universities.indexOf(editObject);
        universities[index] = university;
        dataSource.data = universities;
      }
      return;
    }

    universities.push(new UniversityModel(universities[universities.length - 1].position + 1, university.name, university.city));
    dataSource.data = universities;
    
    this.goBack();
  }

}
