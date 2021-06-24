
export class AppointmentModel {
    constructor(_id: number, _type: string, _status: string, _startTime: Date,  _endTime: Date, _desription: string) {
        this.id = _id;
        this.type = _type;
        this.status = _status;
        this.startTime = _startTime;
        this.endTime = _endTime;
        this.description = _desription;
    }

    id: number;
    type: string;
    status : string; 
    startTime: Date;
    endTime: Date;
    description: string;
}