import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserAuth } from 'src/app/Interfaces/UserAuth.interface';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.scss']
})
export class UsersRegisterComponent implements OnInit {

  // Variables Initialization
  public _RegisterForm: FormGroup = new FormGroup({});
  
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
    this._RegisterForm = this.formBuilder.group({
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
    return this._RegisterForm.get('Username')!;
  };

  private get gUserPassword(): AbstractControl {
    return this._RegisterForm.get('UserPassword')!;
  };

  // Methods for validate the fields
  public get gUsernameValid() {
    return this.gUsername.invalid && (this.gUsername.touched || this.gUsername.dirty);
  }

  public get gUserPasswordValid() {
    return this.gUserPassword.invalid && (this.gUserPassword.touched || this.gUserPassword.dirty);
  }

  public get gRegisterFormValid(){
    return this.gUserPasswordValid || this.gUsernameValid;
  }
  
  // Method for Register an User New
  public onRegister(){
    this._UserAuth = this._RegisterForm.value;
    this._authService.registerByEmail(this._UserAuth)
    .then(() =>{
      this._toastr.success('The User successfully registered...', 'SpotyAPP');
      this._router.navigate(['user/login']);
    })
    .catch(_error =>{
      this._toastr.error(`An error has occurred: ${_error}`, "Error");
    });
  }

}
