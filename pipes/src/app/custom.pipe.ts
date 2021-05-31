import { PipeTransform, Pipe } from '@angular/core';
import {PersonModel} from "./app.component"
@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform {
  title = 'pipes';

  transform(person: PersonModel | undefined) : string{
    if(!person) return "No person detected";
    if(!person.surname && !person.title) return person.name;
   
    return person.name + ' ' + person.surname + ' ' + person.title;
  }

}
