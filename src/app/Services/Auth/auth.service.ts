import { Injectable } from '@angular/core';
import  Firebase  from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IUser } from 'src/app/Interfaces/User.interface';
import { IUserAuth } from 'src/app/Interfaces/UserAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables Initialization
  public _User: IUser = {} as IUser;

  constructor(private _AFAuth: AngularFireAuth) { 
    this.getUser();
  }

  // Get User
  private async getUser() {
    return this._AFAuth.authState.subscribe(async user => {
      if (!user) {
        return;
      }
      this._User.UId = user.uid;
      this._User.Name = user.displayName;
      this._User.Email = user.email;
      let token = await user.getIdToken();
      sessionStorage.setItem('token', token);
    })
  }

  // Method for know Logged in the system
  public isLogged() {
    return this._User ? true : false;
  }

  // Method for know EmptyObject
  public isEmptyObject(obj: any) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  // Method for login with Google
  public LoginGoogle(){
    return this._AFAuth.signInWithPopup(
      new Firebase.auth.GoogleAuthProvider()
    );
  }

  // Method for logout with Google
  public Logout(){
    this._User = {} as IUser;
    sessionStorage.removeItem('token');
    return this._AFAuth.signOut();
  }

  // Method for Auth Login by email
  public LoginWithEmail(_User: IUserAuth): Promise<any> {
    return this._AFAuth.signInWithEmailAndPassword(_User.Username, _User.UserPassword);
  }

  // Method for register in the APP
  public registerByEmail(_User: IUserAuth): Promise<any> {
    return this._AFAuth.createUserWithEmailAndPassword(_User.Username, _User.UserPassword);
  }

}