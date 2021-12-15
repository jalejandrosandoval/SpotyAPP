import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private _serviceAuth: AuthService, 
    private _toastr: ToastrService,
    private _router: Router) {

  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let _token = sessionStorage.getItem('token');
    if (_token) {
      this._toastr.warning('You are not logged into the system...', 'SpotyAPP');
      this._router.navigate(['user/login']);
      return false;
    }

    return true;
  }
  
}