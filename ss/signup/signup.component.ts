import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  subscriber_mentor:any=0;
  frmSignup: any;
  constructor(
    private fb: FormBuilder,
    public gbls: GlobalService,
    private route: Router,
    // private authService: AuthService
  ) { }

  ngOnInit() {
    this.bindFrmSignup();
  }


  signOut(): void {
    // this.authService.signOut();
  }
  bindFrmSignup() {
    this.frmSignup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      is_Active: ['', [ ]],
    });
    this.frmSignup.valueChanges.subscribe((data) => {
      this.logValidationErrorSignup(this.frmSignup);
    });
  }
  formErrorsSignup = {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    is_Active: "",
  };
  errorMessagesSignup = {
    name: { 'required': "Enter name" },
    email: { 'required': "Enter email" },
    phone: { 'required': "Enter phone" },
    password: { 'required': "Enter password" },
    address: { 'required': "Enter address" },
    is_Active: { 'required': "Enter is_Active" },
  }
  logValidationErrorSignup(group: FormGroup = this.frmSignup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorSignup(abstractControl);
      } else {
        this.formErrorsSignup[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesSignup[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsSignup[key] += messages[errorKey] + ' ';
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

  signup(params) {
    try {
      this.gbls.signup(params).subscribe((data:any) => {
        var result: any = data;
        if (result.Result==true) {
          this.route.navigate(['/ee/login']);
          this.gbls.tostSuccess(data.message);
        } else {
          this.gbls.tostError(data.message);
        }
      }, error => {
        this.gbls.tostError("Not Responding");
      });
    } catch (e) {
      this.gbls.tostError("UserId and Password Invalid catch");
    }
  }
  signupmentor(params) {
    try {
      this.gbls.addMentor(params).subscribe((data:any) => {
        var result: any = data;
        if (result.Result==true) {
          this.route.navigate(['/ee/login']);
          this.gbls.tostSuccess(data.message);
        } else {
          this.gbls.tostError(data.message);
        }
      }, error => {
        this.gbls.tostError("Not Responding");
      });
    } catch (e) {
      this.gbls.tostError("UserId and Password Invalid catch");
    }
  }
  signup_subscriber_mentor(p){
    if (this.subscriber_mentor == 1) {
      this.signupmentor(p);
    } else {
      this.signup(p);
    }
  }
  redirect(url) {
    this.gbls.redirect(url);
  }
}
