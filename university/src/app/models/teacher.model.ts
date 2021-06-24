export class TeacherModel {

  constructor(
    _position: number,
     _firstname: string,
      _lastname: string,
      _cnp: string,
      _salary: number,
      _faculty: string
      )
      { 
      this.position = _position;
      this.firstname = _firstname;
      this.lastname = _lastname;
      this.cnp = _cnp;
      this.salary = _salary;
      this.faculty = _faculty;
      
  }
  position: number;
  firstname: string;
  lastname: string;
  cnp: string;;
  salary : number;
  faculty: string;
  
}