import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  formLogin: FormGroup;
  firstName: string;
  lastName: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refreshLogin();
    this.firstName = '';
    this.lastName = '';
    this.errorMessage = '';
  }

  refreshLogin(){
    this.formLogin = this.formBuilder.group({
      usuario: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

    //PARA TESTEO
    /* this.formLogin.valueChanges.subscribe(data => {
      console.log(data);
    }); */
  }

  saveLogin(){
    const user = {username: this.formLogin.get('usuario')?.value, password: this.formLogin.get('password')?.value};

    this.userService.postLogin(user).subscribe(data => {
      this.firstName = data.data.user.firstName;
      this.lastName = data.data.user.lastName;
      sessionStorage.setItem('firstName', this.firstName);
      sessionStorage.setItem('lastName', this.lastName);
      this.userService.setToken(data.data.payload.token);
      this.errorMessage = '';
      this.router.navigateByUrl('/home');
    }, error => {this.errorMessage = "El usuario o contraseña es incorrecto"})
  }

}
