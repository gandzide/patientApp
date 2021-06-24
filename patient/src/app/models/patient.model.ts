
export class PatientModel {

    constructor(_id: number, _firstname: string, _lastname: string, _birthDate: Date,  _cnp: string, _sex: string,
        _city: string, _country: string, _phone: string) {
        this.id = _id;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.birthDate = _birthDate;
        this.cnp = _cnp;
        this.sex = _sex;
        this.city = _city;
        this.country = _country;
        this.phone = _phone;
    }
    id: number;
    firstname: string;
    lastname : string; 
    birthDate: Date;
    cnp: string;
    sex: string;
    city: string;
    country: string;
    phone: string;
  }