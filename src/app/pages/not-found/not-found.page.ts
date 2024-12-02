import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['home/front-page']);
  }

}
