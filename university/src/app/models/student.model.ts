export class StudentModel {

    constructor(
      _id: number,
       _firstName: string,
        _lastName: string,
        _cnp: string,
        _faculty: string
        )
        { 
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.cnp = _cnp,
        this.facultyId = _faculty;
        
    }
    id: number;
    firstName: string;
    lastName: string;
    cnp: string;
    facultyId: string;
  }