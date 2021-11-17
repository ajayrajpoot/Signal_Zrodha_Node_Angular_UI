import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subscriber_mentor: any = 0;
  frmLogin: any;
  constructor(
    private fb: FormBuilder,
    public gbls: GlobalService,
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.bindFrmLogin();
  }


  signOut(): void {
    this.authService.signOut();
  }
  bindFrmLogin() {
    this.frmLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', []]
    });
    this.frmLogin.valueChanges.subscribe((data) => {
      this.logValidationErrorLogin(this.frmLogin);
    });
  }
  formErrorsLogin = {
    email: '',
    password: ''
  };
  errorMessagesLogin = {
    email: { 'required': 'Enter Email.' },
    password: { 'required': 'Enter Password.' }
  }
  logValidationErrorLogin(group: FormGroup = this.frmLogin): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorLogin(abstractControl);
      } else {
        this.formErrorsLogin[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesLogin[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsLogin[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.controls) { // control is a FormGroup
        this.markFormTouched(control);
      } else { // control is a FormControl
        control.markAsTouched();
      }
    });
  }

  loginsubscribe_mentor(p) {
    if (this.subscriber_mentor == 1) {
      this.loginMentor(p);
    } else {
      this.login(p);
    }
  }
  login(params) {
    try {
      this.gbls.login(params).subscribe(data => {
        var result: any = data;
        if (result.Result == true) {
          this.gbls.changetoken(result.cdata.token);
          // localStorage.setItem('sscuser1', JSON.stringify(result));
          localStorage.setItem('sscuser', JSON.stringify(result));
          this.gbls.logedUserObj.next(result.cdata);
          // this.gbls.logedUser = result[0];
          // this.gbls.logedUserObj.next(result[0])
          this.gbls.loadData();
          // localStorage.setItem('userType', 'user');
          this.route.navigate(['/ss/dashboard/']);
        } else {
          this.gbls.tostError(data.Message);
        }
      }, error => {
        this.gbls.tostError("Not Responding");
      });
    } catch (e) {
      this.gbls.tostError("Not Responding catch");
    }
  }

  loginMentor(params) {
    try {
      this.gbls.loginMentor(params).subscribe(data => {
        var result: any = data;
        if (result.Result == true) {
          this.gbls.changetoken(result.cdata.token);
          localStorage.setItem('sscmentor', JSON.stringify(result));
          this.gbls.logedMentorObj.next(result.cdata);
          this.gbls.loadDataMentor();
          this.route.navigate(['/ss/dashboard/']);
        } else {
          this.gbls.tostError(data.Message);
        }
      }, error => {
        this.gbls.tostError("Not Responding");
      });
    } catch (e) {
      this.gbls.tostError("Not Responding catch");
    }
  }
  redirect(url) {
    this.gbls.redirect(url);
  }
}
