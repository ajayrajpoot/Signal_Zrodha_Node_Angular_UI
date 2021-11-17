import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  frmUSER: any;
  users: any;
  type: any = '1';
  search: any = '';
  filter: any = {
    type: 1,
    search: '',
    index: 0,
    count: 10,
    total: 0
  }
  frmMAILER: any;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "250px",
    minHeight: "250px",

    enableToolbar: true,
    showToolbar: true,
    placeholder: "Enter text here...",
    translate: "yes",

    uploadUrl: "v1/images", // if needed
    customClasses: [
      // optional
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ]
  };
  USER_LEVELs: any;
  frmSMS: FormGroup;
  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private sanitized: DomSanitizer,
    public gbl: GlobalService
  ) {

    this.bindFrmUSER();
    this.bindFrmMAILER();
    this.bindFrmSMS();

    this.SEARCH_USER();
    this.GET_USER_LEVEL();

  }
  ngOnInit() {
  }
  //SMS
  bindFrmSMS() {
    this.frmSMS = this.fb.group({
      Mobile: ['', [Validators.required]],
      Message: ['', [Validators.required]],
    });
    this.frmSMS.valueChanges.subscribe((data) => {
      this.logValidationErrorSMS(this.frmSMS);
    });
  }
  formErrorsSMS = {
    Mobile: '',
    Message: ''
  };
  errorMessagesSMS = {
    Mobile: { 'required': 'Enter Mobile.' },
    Message: { 'required': 'Enter Message.' } 
  }
  logValidationErrorSMS(group: FormGroup = this.frmSMS): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorSMS(abstractControl);
      } else {
        this.formErrorsSMS[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesSMS[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsSMS[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  SEND_SMS(v) {
    var p = {
      Mobile: v.Mobile,
      Message: v.Message
    }
    this.gbl.SEND_SMS(p).subscribe(data => {
      // if (data == "Mail Send") {
        this.gbl.tostSuccess(data);        
      // } else {
      //   this.gbl.tostError(data.Message);
      // }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  //MAil
  bindFrmMAILER() {
    this.frmMAILER = this.fb.group({
      To: ['', [Validators.required]],
      MailSubject: ['', [Validators.required]],
      MailBody: ['', [Validators.required]],
      ccMail: ['', []],
      BccMail: ['', []],
    });
    this.frmMAILER.valueChanges.subscribe((data) => {
      this.logValidationErrorMAILER(this.frmMAILER);
    });
  }
  formErrorsMAILER = {
    MailSubject: '',
    MailBody: '',
    MailCode: '',
    MailTemplate: '',
    ccMail: '',
    BccMail: ''
  };
  errorMessagesMAILER = {
    MailSubject: { 'required': 'Enter MailSubject.' },
    MailBody: { 'required': 'Enter MailBody.' },
    MailCode: { 'required': 'Enter MailCode.' },
    MailTemplate: { 'required': 'Enter MailTemplate.' },
    ccMail: { 'required': 'Enter ccMail.' },
    BccMail: { 'required': 'Enter BccMail.' }
  }
  logValidationErrorMAILER(group: FormGroup = this.frmMAILER): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorMAILER(abstractControl);
      } else {
        this.formErrorsMAILER[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesMAILER[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsMAILER[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  // User
  bindFrmUSER() {
    this.frmUSER = this.fb.group({
      "NAME": ['', [Validators.required]],
      "EMAIL": ['', [Validators.required]],
      "PHONE": ['', [Validators.required]],
      "ACTIVE": [''],
      PASSWORD: [''],
      VERIFICATION_EMAIL: [''],
      VERIFICATION_PHONE: [''],
      USER_TYPE: ['0'],
    });
    this.frmUSER.valueChanges.subscribe((data) => {
      this.logValidationErrorUSER(this.frmUSER);
    });
  }
  formErrorsUSER = {
    NAME: '',
    EMAIL: '',
    PHONE: '',
    ACTIVE: '',
    PASSWORD: ''
  };
  errorMessagesUSER = {
    NAME: { 'required': 'Enter NAME.' },
    EMAIL: { 'required': 'Enter EMAIL.' },
    PHONE: { 'required': 'Enter PHONE.' },
    ACTIVE: { 'required': 'Enter ACTIVE.' },
    PASSWORD: { 'required': 'Enter PASSWORD.' },
  }
  logValidationErrorUSER(group: FormGroup = this.frmUSER): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorUSER(abstractControl);
      } else {
        this.formErrorsUSER[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesUSER[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsUSER[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(frm) {

  }
  GET_USER() {
    this.gbl.GET_USER({}).subscribe(data => {
      this.users = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  SEARCH_USER() {
    var p1 = {
      type: this.type,
      search: this.search,
      index: this.filter.index,
      count: this.filter.count
    }
    this.gbl.SEARCH_USER(p1).subscribe(data => {
      this.users = data.DtResult;
      this.filter.total = data.Count
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  cUser: any;
  ADD_USER(p) {
    var p1 = {
      ID: this.cUser == null ? 0 : this.cUser.ID,
      NAME: p.NAME,
      EMAIL: p.EMAIL,
      PHONE: p.PHONE,
      ACTIVE: p.ACTIVE == true ? 1 : 0,
      REGISTRATION: '0',
      PASSWORD: p.PASSWORD,
      VERIFICATION_EMAIL: p.VERIFICATION_EMAIL ? 1 : 0,
      VERIFICATION_PHONE: p.VERIFICATION_PHONE ? 1 : 0,
      USER_TYPE: p.USER_TYPE,
      CREATE_DATE: ''
    }
    this.gbl.ADD_USER(p1).subscribe(data => {
      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        // this.GET_USER();
        this.SEARCH_USER();
        this.frmUSER.reset();
        this.cUser = null;
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  DELETE_USER(ID) {
    var p1 = { "ID": ID, }
    this.gbl.DELETE_USER(p1).subscribe(data => {
      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        this.GET_USER();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  p: any = 0;
  pageChanged(e) {
    this.p = e;
    this.filter.index = e - 1;
    this.SEARCH_USER();
  }

  SEND_MAIL1(v) {
    var p1 = {
      htmlString: v.MailBody,
      mailTo: v.To,
      Subject: v.MailSubject,
      ccMail: v.ccMail,
      BccMail: v.BccMail
    }
    this.gbl.SEND_MAIL1(p1).subscribe(data => {
      if (data == "Mail Send") {
        this.gbl.tostSuccess(data);
        this.frmMAILER.reset();
        this.cUser = null;
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  GET_USER_LEVEL() {
    this.gbl.GET_USER_LEVEL({}).subscribe(data => {
      if (data.DtResult.length > 0) {
        this.USER_LEVELs = data.DtResult;
      } else {
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
