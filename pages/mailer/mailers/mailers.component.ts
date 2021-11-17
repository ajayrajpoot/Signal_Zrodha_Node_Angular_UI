import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { GlobalService } from 'src/app/service/global.service';
@Component({
  selector: 'app-mailers',
  templateUrl: './mailers.component.html',
  styleUrls: ['./mailers.component.scss']
})
export class MailersComponent implements OnInit {

  mailer: any = { "MailID": "26", "Partner_ID": "1", "MailSubject": "weqw", "MailBody": "qwewqe", "MailCode": "weqwe", "MailTemplate": "qwew", "ccMail": "wqe", "BccMail": "qwe", "PRODUCT_ID": "1" }
  mailers: any = [];
  cMAILER: any;
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
  users: any;
  cuser: any;
  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private sanitized: DomSanitizer,
    public gbl: GlobalService) {
      this.gbl.logedUser.subscribe(data=>{
        this.cuser=data;
      })
    this.GET_MAILER(); this.bindFrmMAILER();
    this.GET_USER();
  }

  ngOnInit() {
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
  bindFrmMAILER() {
    this.frmMAILER = this.fb.group({
      "MailSubject": ['', [Validators.required]],
      "MailBody": ['', [Validators.required]],
      "MailCode": ['', [Validators.required]],
      "MailTemplate": ['', [Validators.required]],
      "MailTemplateTest": [''],
      "ccMail": ['', [Validators.required]],
      "BccMail": ['',],
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
  markFormTouched(frm){

  }

  GET_MAILER() {
    this.gbl.GET_MAILER({}).subscribe(data => {
      console.log(">>>>>", data);
      this.mailers = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }
  ADD_MAILER(p) {
    var p1 = {
      "MailID": this.cMAILER == null ? 0 : this.cMAILER.MailID,
      "MailSubject": p.MailSubject,
      "MailBody": p.MailBody,
      "MailCode": p.MailCode,
      "MailTemplate": p.MailTemplate,
      "ccMail": p.ccMail,
      "BccMail": p.BccMail,
      "USER_ID": 0
    } 
    this.gbl.ADD_MAILER(p1).subscribe(data => {

      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        this.GET_MAILER();
      this.frmMAILER.reset();
      this.cMAILER = null;
      } else {
        this.gbl.tostError(data.Message);
      }

    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }

  DELETE_MAILER(MailID) {
    var p1 = { "MailID": MailID, }
    this.gbl.DELETE_MAILER(p1).subscribe(data => {
      this.GET_MAILER();
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }
  SEND_MAIL(p) {
    var p1 = {
      htmlString: this.mail.subject == "" ? this.csetMailTo.MailBody : this.mail.subject,
      mailTo: p.EMAIL,
      Subject: this.mail.subject,
    }
    this.gbl.SEND_MAIL(p1).subscribe(data => {
      console.log(">>>>>SEND_MAIL", data);

      this.mail = { subject: '', body: '' }
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }

  SEND_MAIL_BYUSER(p) {
    var p1 = {
      htmlString: this.mail.subject == "" ? this.csetMailTo.MailBody : this.mail.subject,
      mailTo: p.EMAIL,
      Subject: this.mail.subject,
      userId: 0,
      MailCode:this.csetMailTo.MailCode,
      value:this.values.toString()
    }
    this.gbl.SEND_MAIL_BYUSER(p1).subscribe(data => {
      console.log(">>>>>SEND_MAIL_BYUSER", data);
      this.mail = {
        subject: '',
        body: ''
      }
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }
  mail: any = {
    subject: '',
    body: ''
  }
  csetMailTo: any;
  valuesLaval:any;
  values:any=[];
  setMailTo(i) {
    this.csetMailTo = i;
    this.valuesLaval=i.MailTemplate.split(',')
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  GET_USER() {
    this.gbl.GET_USER({}).subscribe(data => {
      this.users = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }

  SEND_MESS_Whatsup(p) {
    var p1 = {
      To: p.To,
      Msg: p.Msg,
      // From: '+919958243529',
    }
    this.gbl.SEND_MESS_Whatsup(p1).subscribe(data => {
      console.log(">>>>>SEND_MESS_Whatsup", data);
    }, error => {
      this.gbl.tostError("Server Not Responding")
    })
  }
}
