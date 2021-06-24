import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef,
    OnInit,
  } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';
  import { Observable, Subject, Subscription } from 'rxjs';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
  } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentModel } from 'src/app/models/appointment.model';
  
  const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

export class MyCalendarEvent implements CalendarEvent{

    public constructor(appoitnment: AppointmentModel) {
      this.type = appoitnment.type;
      this.status = appoitnment.status;
      this.start = appoitnment.startTime;
      this.end = appoitnment.endTime;
      this.title = appoitnment.description;
    }
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: CalendarEventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: { beforeStart?: boolean; afterEnd?: boolean; };
    draggable?: boolean;
    meta?: any;
    status?: string;
    type?: string;
}
  
@Component({
    selector: 'app-appointment-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.scss']
  })
export class AppointmentListComponent implements OnInit{
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

    ngOnInit(): void {;
     
    }
    convertToEvent(list: AppointmentModel[]){
        return list.forEach(app => {
          new MyCalendarEvent(app);
        });
    }

    constructor(private modal: NgbModal, public service: AppointmentService) {
      this.subscriptionList.push(
        this.service.getAppointments().subscribe(list => this.appointments = list)
        );
      }
    
    subscriptionList: Subscription[] = [];

    appointments: AppointmentModel[] = [];

    view: CalendarView = CalendarView.Month;
  
    CalendarView = CalendarView;
  
    viewDate: Date = new Date();

    statusTypes = ["CREATED", "PLANNED", "CONFIRMED", "CLOSED"]

    appointmentTypes = ["REGULAR", "HOLIDAY", "VACATION", "GROUP"]
  
    modalData: {
      action: string;
      event: MyCalendarEvent;
    };
  
    actions: CalendarEventAction[] = [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: 'Edit',
        onClick: ({ event }: { event: MyCalendarEvent }): void => {
          this.handleEvent('Edited', event);
        },
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: 'Delete',
        onClick: ({ event }: { event: MyCalendarEvent }): void => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent('Deleted', event);
        },
      },
    ];
  
    refresh: Subject<any> = new Subject();
  
    events: MyCalendarEvent[] = [];
    // events: MyCalendarEvent[] = [
    //   {
    //     start: subDays(startOfDay(new Date()), 1),
    //     end: addDays(new Date(), 1),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     actions: this.actions,
    //     allDay: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true,
    //     },
    //     draggable: true,
    //     status: "REGULAR",
    //     type: "PLANNED"
    //   },
    //   {
    //     start: startOfDay(new Date()),
    //     title: 'An event with no end date',
    //     color: colors.yellow,
    //     actions: this.actions,
    //   },
    //   {
    //     start: subDays(endOfMonth(new Date()), 3),
    //     end: addDays(endOfMonth(new Date()), 3),
    //     title: 'A long event that spans 2 months',
    //     color: colors.blue,
    //     allDay: true,
    //   },
    //   {
    //     start: addHours(startOfDay(new Date()), 2),
    //     end: addHours(new Date(), 2),
    //     title: 'A draggable and resizable event',
    //     color: colors.yellow,
    //     actions: this.actions,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true,
    //     },
    //     draggable: true,
    //   },
    // ];
  
    activeDayIsOpen: boolean = true;
  
    dayClicked({ date, events }: { date: Date; events: MyCalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
        this.viewDate = date;
      }
    }

    eventTimesChanged({
      event,
      newStart,
      newEnd,
    }: CalendarEventTimesChangedEvent): void {
      this.events = this.events.map((iEvent) => {
        if (iEvent === event) {
          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return iEvent;
      });
      this.handleEvent('Dropped or resized', event);
    }
  
    handleEvent(action: string, event: MyCalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  
    addEvent(): void {
      this.events = [
        ...this.events,
        {
          title: 'New event',
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
        },
      ];
    }
  
    deleteEvent(eventToDelete: MyCalendarEvent) {
      this.events = this.events.filter((event) => event !== eventToDelete);
    }
  
    setView(view: CalendarView) {
      this.view = view;
    }
  
    closeOpenMonthViewDay() {
      this.activeDayIsOpen = false;
    }
}
