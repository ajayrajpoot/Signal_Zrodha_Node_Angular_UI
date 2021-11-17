import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent implements OnInit {

  frmSMTP: any;

  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private sanitized: DomSanitizer,
    public gbl: GlobalService) {
    this.bindFrmSMTP();
    this.GET_SMTP();
  }
  ngOnInit() {
  }
  
  bindFrmSMTP() {
    this.frmSMTP = this.fb.group({
      "SMTP_SERVER": ['', [Validators.required]],
      "SMTP_PORT": ['', [Validators.required]],
      "MAILER_USER_NAME": ['', [Validators.required]],
      "MAILER_PASSWORD": ['', [Validators.required]],
      "ENABLE_SSL": ['', [Validators.required]],
      "TIMEOUT_MS": ['', []],
    });
    this.frmSMTP.valueChanges.subscribe((data) => {
      this.logValidationErrorSMTP(this.frmSMTP);
    });
  }
  formErrorsSMTP = {
    SMTP_SERVER: '',
    SMTP_PORT: '',
    MAILER_USER_NAME: '',
    MAILER_PASSWORD: '',
    ENABLE_SSL: '',
    TIMEOUT_MS: ''
  };
  errorMessagesSMTP = {
    SMTP_SERVER: { 'required': 'Enter SMTP_SERVER.' },
    SMTP_PORT: { 'required': 'Enter SMTP_PORT.' },
    MAILER_USER_NAME: { 'required': 'Enter MAILER_USER_NAME.' },
    MAILER_PASSWORD: { 'required': 'Enter MAILER_PASSWORD.' },
    ENABLE_SSL: { 'required': 'Enter ENABLE_SSL.' },
    TIMEOUT_MS: { 'required': 'Enter TIMEOUT_MS.' }
  }
  logValidationErrorSMTP(group: FormGroup = this.frmSMTP): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorSMTP(abstractControl);
      } else {
        this.formErrorsSMTP[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesSMTP[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsSMTP[key] += messages[errorKey] + ' ';
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
  GET_SMTP() {
    this.gbl.GET_SMTP({}).subscribe(data => {
      if (data.DtResult.length > 0) {
        this.cSMTP = data.DtResult[0];
        this.frmSMTP.reset(data.DtResult[0])
        this.smtps = data.DtResult;
      } else {

      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  smtp: any = { "ID": "3", "SMTP_SERVER": "dsdsf", "SMTP_PORT": "234", "MAILER_USER_NAME": "re", "MAILER_PASSWORD": "ert", "ENABLE_SSL": "1", "TIMEOUT_MS": "122", "PARTNER_ID": "1", "PRODUCT_ID": "12" }
  smtps: any = [];
  cSMTP: any = null;
  ADD_SMTP(p) {
    var p1 = {
      "ID": this.cSMTP == null ? 0 : this.cSMTP.ID,
      "SMTP_SERVER": p.SMTP_SERVER,
      "SMTP_PORT": p.SMTP_PORT,
      "MAILER_USER_NAME": p.MAILER_USER_NAME,
      "MAILER_PASSWORD": p.MAILER_PASSWORD,
      "ENABLE_SSL": p.ENABLE_SSL,
      "TIMEOUT_MS": p.TIMEOUT_MS,
      "USER_ID": 0
    }
    this.gbl.ADD_SMTP(p1).subscribe(data => {
      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        this.GET_SMTP();
        this.frmSMTP.reset();
        this.cSMTP = null;
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  ACTIVE_SMTP(p) {
    var p1 = {
      "ID": p.ID,
      "USER_ID": p.USER_ID
    }
    // var p1 = this.smtp;
    this.gbl.ACTIVE_SMTP(p1).subscribe(data => {
      console.log(">>>>>", data);
      this.GET_SMTP();
    })
  }
}
