import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserAuth } from 'src/app/Interfaces/UserAuth.interface';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent implements OnInit {

  // Variables Initialization
  public _LoginForm: FormGroup = new FormGroup({});
  private _UserAuth = {} as IUserAuth;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private _authService: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  // Method for initialization of EmployeesForm
  public BuildForm() {
    this._LoginForm = this.formBuilder.group({
      Username: ['', {
        Validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(this.isEmail)
        ]
      }],
      UserPassword: ['', {
        Validators: [Validators.required]
      }],
    });
  }

  // Methods for get the fields of Form
  private get gUsername(): AbstractControl {
    return this._LoginForm.get('Username')!;
  };

  private get gUserPassword(): AbstractControl {
    return this._LoginForm.get('UserPassword')!;
  };

  // Methods for validate the fields
  public get gUsernameValid() {
    return this.gUsername.invalid && (this.gUsername.touched || this.gUsername.dirty);
  }

  public get gUserPasswordValid() {
    return this.gUserPassword.invalid && (this.gUserPassword.touched || this.gUserPassword.dirty);
  }

  public get gLoginFormValid(){
    return this.gUserPasswordValid || this.gUsernameValid;
  }

  // Method for put in the method .then at moment Login by email or Google
  private thenLogin(){
    this._toastr.success('The User Auth OK!', 'SpotyAPP');
    this._authService.postTokenSpotify();
    this._router.navigate(['/home']);
  }

  // Method Login
  public onLogin(){
    this._UserAuth = this._LoginForm.value;
    this._authService.LoginWithEmail(this._UserAuth)
    .then(() =>{
      this.thenLogin();
    })
    .catch(_error =>{
      this._toastr.error(`An error has occurred: ${_error}`, "Error");
    });
  }

  // Method LoginAuthGoogle
  public LoginAuth(){
    this._authService.LoginGoogle().then(() => {
      this.thenLogin();
    })
    .catch(_error =>{
      this._toastr.error(`An error has occurred: ${_error}`, "Error");
    });
  }

  public onRegister(){
    this._router.navigate(['/user/register']);
  }

}