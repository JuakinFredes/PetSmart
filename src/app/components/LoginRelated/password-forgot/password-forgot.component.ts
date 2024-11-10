import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.scss'],
})
export class PasswordForgotComponent  implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {}

  recuperar(){
    this.router.navigate(['plogin/password-reset']);
  }

}
