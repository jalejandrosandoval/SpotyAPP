import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/User.interface';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // Variables Initialization
  public _User = {} as IUser;

  constructor(private _authService: AuthService,
    private _router: Router) { 
    this._User = _authService._User;
  }

  ngOnInit(): void {
  }

  public Logout(){
    this._authService.Logout();
    this._router.navigate(['/login']);
  }


}
