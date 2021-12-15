import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let _token: string | null = sessionStorage.getItem('token');

    let _requestAPI = request;

    if(_token){
      request = _requestAPI.clone(
        {
          setHeaders:{
            authorization: `Bearer ${_token}`
          }
        }
      )
    }

    return next.handle(request);

  }

}