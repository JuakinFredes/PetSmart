import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Platform} from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';



interface IEvent {
  id: string;
  title: string;
  location: string;
  message: string;
  startDate: string;
  endDate: string;
}



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent  implements OnInit {
  listEvents$: Observable<any[]>;

  constructor(public route : Router,
              private calendar: Calendar,
              private platform: Platform,
              private cdr: ChangeDetectorRef,
              ) 
              { 
                this.calendar.createCalendar('MyCalendar').then(
                  (msg) => { console.log(msg); },
                  (err) => { console.log(err); }
                 );
              }


              
  async ngOnInit() {
    await this.checkPermission();
    this.onChange()
  }


  openCalendar() {
    this.calendar.openCalendar(new Date()).then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  async checkPermission() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      const result = await this.calendar.hasReadWritePermission();
      if (result === false) {
        await this.calendar.requestReadWritePermission();
      }
    }
  }

  async addEvent(title: string, location?: string, notes?: string, startDate?: Date, endDate?: Date) {
    this.calendar.createEventInteractively(title, location, notes, startDate, endDate).then( result => {
      console.log(JSON.stringify(result));
    }).catch( err => {
      console.log(JSON.stringify(err));
    });
  }

  async createEvent() {
    await this.addEvent('', '', '');
  }

  async deleteEvent(id: string) {
    this.calendar.deleteEventById(id).then().finally( () => {
    });
  }

  onChange() {
    const startDate = new Date(1970, 0, 1); 
    const endDate = new Date(2100, 11, 31);

    this.calendar.listEventsInRange(startDate,endDate).then( (events) => {
      this.listEvents$ = events;
      this.cdr.detectChanges();
      console.log({events});
    }).catch( err => {
      console.info({err});
    });
  }


irCalendario(){
    this.route.navigate(['home/calendario'])
  }
  
  irAlarmas(){
    this.route.navigate(['home/alarmas'])
  }
}
