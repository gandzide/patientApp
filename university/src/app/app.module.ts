import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniversityComponent } from './content/university/university.component';
import { TeacherComponent } from './content/teacher/teacher.component';
import { CourseComponent } from './content/course/course.component';
import { MarksComponent } from './content/marks/marks.component';
import { StudentComponent } from './content/student/student.component';
import { FacultyComponent } from './content/faculty/faculty.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UniversityFormComponent } from './content/university/university-form/university-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightsDirective } from './directives/highlights.directive';
import { FacultyFormComponent } from './content/faculty/faculty-form/faculty-form.component';
import { MatInputModule } from '@angular/material/input';
import { UniversityListComponent } from './content/university/university-list/university-list.component';
import { FacultyListComponent } from './content/faculty/faculty-list/faculty-list.component';
import { TeacherListComponent } from './content/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './content/teacher/teacher-form/teacher-form.component';
import { StudentListComponent } from './content/student/student-list/student-list.component';
import { StudentFormComponent } from './content/student/student-form/student-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    TeacherComponent,
    CourseComponent,
    MarksComponent,
    StudentComponent,
    FacultyComponent,
    SidebarComponent,
    DashboardComponent,
    ContentComponent,
    UniversityFormComponent,
    HighlightsDirective,
    FacultyFormComponent,
    UniversityListComponent,
    FacultyListComponent,
    TeacherListComponent,
    TeacherFormComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
