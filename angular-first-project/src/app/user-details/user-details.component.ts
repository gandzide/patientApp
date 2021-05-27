import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
    @Input() person = {
      firstname: 'Ioana',
      lastname: 'Moflic',
      age: 21
    }    
    @Output() emitButtonClicked: EventEmitter<string> = new EventEmitter();
}
