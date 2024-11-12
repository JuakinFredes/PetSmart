import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent  implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {}

  goBack(){
    this.route.navigate(['home/agenda'])
  }

}
