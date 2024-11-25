import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent  implements OnInit {

  constructor(public route : Router,
              
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
