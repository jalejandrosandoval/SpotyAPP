import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private _router: Router,
    private _toastr: ToastrService) { 
    this._User = _authService._User;
  }

  ngOnInit(): void {
  }

  // Method for logout session
  public Logout(){
    this._authService.Logout().then(
      () =>{
        this._toastr.info('You are logging out...', 'SpotyAPP');
        this._router.navigate(['/user/login']);
      }
    );
  }

  // Method to find album from any term. 
  public searchAlbum(term: string){
    this._router.navigate(['/home/search', term]);
  }


}