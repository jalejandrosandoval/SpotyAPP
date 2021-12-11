import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent implements OnInit {

  // Variables Initialization
  public _LoginForm: FormGroup = new FormGroup({});
  
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

  // Method Login
  public onLogin(){

  }

  // Method LoginAuthGoogle
  public LoginAuth(){
    this._authService.Login().then(() => {
      this._router.navigate(['/home']);
    });
  }

}
