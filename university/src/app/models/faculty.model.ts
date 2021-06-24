export class FacultyModel {

  constructor(_position: number, _name: string, _university: string) {
      this.position = _position;
      this.name = _name;
      this.university = _university;
      
  }
  position: number;
  name: string;
  university: string;
}