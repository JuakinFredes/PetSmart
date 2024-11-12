import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss'],
})
export class AlarmasComponent  implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {}

  goBack(){
    this.route.navigate(['home/agenda'])
  }

}
