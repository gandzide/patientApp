import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent{

  @Input() text = "joke text";
  @Output() emitButtonClicked: EventEmitter<string> = new EventEmitter();

  buttonWasClicked(value: string) {
    this.emitButtonClicked.emit(value);
  }
}
