import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent  implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  regresar(){
    this.router.navigate(['plogin/login']);
  }


}
