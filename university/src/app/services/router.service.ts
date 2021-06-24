import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public activatedRoute: BehaviorSubject<ActivatedRoute> = new BehaviorSubject(this.route);

  goToStudent(){
    this.router.navigate(['student']);
  }

  goToStudentForm(){
    this.router.navigate([`student/form`]);
  }

}
