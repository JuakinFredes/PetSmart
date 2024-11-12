import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  user$: Observable<any>;


  constructor(public ngFireAuth : AngularFireAuth) { 
    this.user$ = this.ngFireAuth.authState;
  }

  isLoggedIn(): Observable<boolean> {
    return this.ngFireAuth.authState.pipe(
      map(user => !!user) 
    );
  }

  async registrarUsuario(email:string,password:string){
      return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async loginUsuario(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async logoutUsuario(){
    return await this.ngFireAuth.signOut()
  }

  async obtenerUsuario(){
    return new Promise <User | null> ((resolve,reject) =>{
        this.ngFireAuth.onAuthStateChanged(user => {
          if (user){
            resolve(user)
          }else{
            resolve(null)
          }
        },reject)
    } )
      
    
  }

}
