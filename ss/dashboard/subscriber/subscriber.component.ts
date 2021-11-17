import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  frmSUBSCRIBER: any;
  SUBSCRIBERs: any;
  constructor(
    private fb: FormBuilder,
    public gbl: GlobalService
  ) {
    this.getallsubscriber();
    this.bindFrmSUBSCRIBER();

    this.getallsubscriber();
  }
  ngOnInit() {
  }

  // SUBSCRIBER
  bindFrmSUBSCRIBER() {
    this.frmSUBSCRIBER = this.fb.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      is_Active: ['', []],

    });
    this.frmSUBSCRIBER.valueChanges.subscribe((data) => {
      this.logValidationErrorSUBSCRIBER(this.frmSUBSCRIBER);
    });
  }
  formErrorsSUBSCRIBER = {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    is_Active: "",
  };
  errorMessagesSUBSCRIBER = {
    name: { 'required': "Enter name" },
    email: { 'required': "Enter email" },
    phone: { 'required': "Enter phone" },
    password: { 'required': "Enter password" },
    address: { 'required': "Enter address" },
    is_Active: { 'required': "Enter is_Active" },
  }
  logValidationErrorSUBSCRIBER(group: FormGroup = this.frmSUBSCRIBER): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorSUBSCRIBER(abstractControl);
      } else {
        this.formErrorsSUBSCRIBER[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesSUBSCRIBER[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsSUBSCRIBER[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(frm) {

  }
  addUpdateSubscriber(p) {
    if (this.cSUBSCRIBER == null) {
      this.addsubscriber(p);
    } else {
      this.updatesubscriber(p);
    }
  }
  cSUBSCRIBER: any = null;
  addsubscriber(p) {
    var par = {
      id: 0,
      name: p.name,
      email: p.email,
      phone: p.phone,
      password: p.password,
      address: p.address,
      is_Active: p.is_Active,
    };
    this.gbl.addsubscriber(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmSUBSCRIBER.reset()
        this.getallsubscriber();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  updatesubscriber(p) {
    console.log(">>", this.cSUBSCRIBER);
    console.log(">>", this.cSUBSCRIBER._id);
    var par = {
      id: this.cSUBSCRIBER == null ? 0 : this.cSUBSCRIBER._id,
      name: p.name,
      email: p.email,
      phone: p.phone,
      password: p.password,
      address: p.address,
      is_Active: p.is_Active,
    };
    this.gbl.updatesubscriber(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmSUBSCRIBER.reset()
        this.getallsubscriber();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  getallsubscriber() {
    var p1 = {
    }
    this.gbl.getallsubscriber(p1).subscribe(data => {
      this.SUBSCRIBERs = data.users;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  getAllMentorsPlans() {
    var p1 = {
      MentorId: 0
    }
    this.gbl.getAllMentorsPlans(p1).subscribe(data => {
      this.SUBSCRIBERs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  currentSubscriber(p) {
    this.gbl.logedUserObj.next(p);
    this.gbl.tostSuccess("Login Successfully");
  }
}
