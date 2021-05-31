import { Component , OnInit} from '@angular/core';
import {CustomPipe} from './custom.pipe'

export class PersonModel{

  constructor(_name:string, _surname?:string, _title?:string) {
    this.name = _name;
    this.surname = _surname;
    this.title = _title;
  }
  name: string;
  surname?:string;
  title?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pipes';
  data: Date = new Date();
  valute: number = 300;
  persoana: PersonModel | undefined;

  ngOnInit(){
    this.setPersonDetails();
  }

  private setPersonDetails(){
    // this.persoana = new PersonModel('Ioana',  'Moflic', 'student');
    this.persoana = new PersonModel('Ioana');
  }
}

