import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input() text = "joke text";
  @Output() emitButtonClick: EventEmitter<string> = new EventEmitter();

  changeName() {
    console.log("button clicked");
    this.emitButtonClick.emit("value");
  }
}
