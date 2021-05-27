import { Component, Input, OnInit } from '@angular/core';
import { PersonModel } from '../my-first/my-first.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent{
    @Input() item! : PersonModel;
}
