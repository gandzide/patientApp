import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent {

    firstName: string = '';
    lastName: string = '';
    age: number = 0;

    @Output() emitButtonClicked: EventEmitter<PersonModel> = new EventEmitter();

    resetValues(){
      this.firstName = '';
      this.lastName = '';
      this.age = 0;
    }

    saveValues(){

      if (!this.areValidValues())
            return;

        const person: PersonModel = {
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age
        }
        this.emitButtonClicked.emit(person);
    }

    areValidValues(): boolean {
       return (!!this.firstName && !!this.lastName && this.age > 0)
    }
}

export interface PersonModel{
  firstName: string;
  lastName: string;
  age: number;
}
