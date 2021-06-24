import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './content/course/course.component';
import { FacultyFormComponent } from './content/faculty/faculty-form/faculty-form.component';
import { FacultyListComponent } from './content/faculty/faculty-list/faculty-list.component';
import { FacultyComponent } from './content/faculty/faculty.component';
import { MarksComponent } from './content/marks/marks.component';
import { StudentFormComponent } from './content/student/student-form/student-form.component';
import { StudentListComponent } from './content/student/student-list/student-list.component';
import { StudentComponent } from './content/student/student.component';
import { TeacherFormComponent } from './content/teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './content/teacher/teacher-list/teacher-list.component';
import { TeacherComponent } from './content/teacher/teacher.component';
import { UniversityFormComponent } from './content/university/university-form/university-form.component';
import { UniversityListComponent } from './content/university/university-list/university-list.component';
import { UniversityComponent } from './content/university/university.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'university', component: UniversityComponent, children:[
    {path: 'list', component:UniversityListComponent},
    {path: 'form', component: UniversityFormComponent},
    {path: 'form/:id', component: UniversityFormComponent},
    {path: '**', redirectTo: '/university/list'}
  ]},
  
  {path: 'faculty', component: FacultyComponent, children: [
    {path: 'list', component:FacultyListComponent},
    {path: 'form', component: FacultyFormComponent},
    {path: 'form/:id', component: FacultyFormComponent},
    {path: '**', redirectTo: '/faculty/list'}
  ]},

  {path: 'student', component: StudentComponent , children: [
    {path: 'list', component: StudentListComponent},
    {path: 'form', component: StudentFormComponent},
    {path: 'form/:id', component: StudentFormComponent},
    {path: '**', redirectTo: '/student/list'}
  ]},

  {path: 'teacher', component: TeacherComponent , children: [
    {path: 'list', component:TeacherListComponent},
    {path: 'form', component: TeacherFormComponent},
    {path: 'form/:id', component: TeacherFormComponent},
    {path: '**', redirectTo: '/teacher/list'}
  ]},

  {path: 'course', component: CourseComponent},
  {path: 'mark', component: MarksComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
