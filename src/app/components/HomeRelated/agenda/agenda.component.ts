import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent  implements OnInit {

  constructor(public route : Router,
              private calendar: Calendar
              ) 
              { 
                /**this.calendar.createCalendar('MyCalendar').then(
                (msg) => { console.log(msg); },
                (err) => { console.log(err); }
                );*/
              }


              
  ngOnInit() {}

  irCalendario(){
    this.route.navigate(['home/calendario'])
  }
  
  irAlarmas(){
    this.route.navigate(['home/alarmas'])
  }

}
