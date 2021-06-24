export class UniversityModel {

  constructor(_position: number, _name: string, _city: string) {
      this.position = _position;
      this.name = _name;
      this.city = _city;
      
  }
  position: number;
  name: string;
  city: string;
  
}