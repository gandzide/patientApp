import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {

  // number: number = 90;
  // numbers = [1,2,3,4];

  // @Input() person! : PersonModel;

  // isValidNumber(){
  //     return this.number % 2 === 0;
  // }
  public personList: PersonModel[] = [
    {
        name: 'Ruth',
        age: 21,
        personType: PersonType.ADMIN
    },
    {
      name: 'Ioana',
      age: 21,
      personType: PersonType.ADMIN
  },
  {
    name: 'Alexia',
    age: 21,
    personType: PersonType.ADMIN
  },
  ]
  PersonType = PersonType;
}

export interface PersonModel{
  name: string;
  age: number;
  personType?: PersonType
}

export enum PersonType{
  GUEST,
  ADMIN
}
