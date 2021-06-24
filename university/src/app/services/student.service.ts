import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentModel } from '../models/student.model';
import { ApiRequestService } from './api-request.service';
import { Api } from './api.enum';

@Injectable({
  providedIn: 'root'
})

export class StudentService{

  constructor(private apiService: ApiRequestService) { }

  //  public students: StudentModel[] = [
  //   {
  //     position: 1, 
  //     firstname: 'Ioana',
  //     lastname: 'Moflic', 
  //     cnp: 'somecnp',
  //     faculty: 'Facultatea de arte si meserii'
  //   },
  
  //   {
  //     position: 2, 
  //     firstname: 'Cine',
  //     lastname: 'Stie', 
  //     cnp: 'somecnp',
  //     faculty: 'Facultatea de cine stie'
  //   }
    
  // ];

  // public studentList: BehaviorSubject<StudentModel[]> = new BehaviorSubject(this.students);

  getStudents(): Observable<StudentModel[]>{
    return this.apiService.submitGetRequest(Api.GET_STUDENT);
  }

  postStudent(student:StudentModel): Observable<StudentModel>{
    return this.apiService.submitPostRequest(Api.CREATE_STUDENT, student);
  }

  putStudent(student:StudentModel): Observable<StudentModel>{
    return this.apiService.submitPutRequest(Api.UPDATE_STUDENT + student.id, student);
  }

  deleteStudent(studentId:number) {
    return this.apiService.submitDeleteRequest(Api.DELETE_STUDENT + studentId);
    }

  // deleteUniversity(i:number){
  //   const list = this.studentList.getValue();
  //   const filterList = list.filter(s => s.position !== i);
  //   this.studentList.next(filterList);
  // }

  // saveUniversity(student: StudentModel, paramId?:number){

  //   if (student.firstname == '' || student.lastname == '') {
  //     alert('Campurile trebuie sa fie completate.')
  //     return;
  //   }

  //   const list = this.studentList.getValue();

  //   let index = -1;
  //   if (!!paramId){
  //     const editObject = list.find((t) => t.position === paramId );
  //     if(!!editObject){
  //       index = list.indexOf(editObject);
  //       list[index] = student;
  //       this.studentList = new BehaviorSubject(list);
  //     }
  //     return;
  //   }

  //     list.push(new StudentModel(this.students[list.length - 1].position + 1, student.firstname, student.lastname,
  //     student.cnp, student.faculty));
  //     this.studentList = new BehaviorSubject(list);
  // }
}
