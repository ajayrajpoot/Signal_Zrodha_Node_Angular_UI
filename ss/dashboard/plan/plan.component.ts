import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { GlobalService } from '../../service/global.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  frmPLAN: any;
  PLANs: any;
  cMentor: any;
  cSubscriber: any;
  constructor(
    private fb: FormBuilder,
    public gbl: GlobalService,
    // public modalRef: MDBModalRef
  ) {

    this.bindFrmPLAN();
    this.gbl.logedUser.subscribe(data => { this.cSubscriber = data; });
    this.gbl.logedMentor.subscribe(data => {
      this.cMentor = data;
      if (this.cMentor != null) {
        this.getPlan(this.cMentor._id);
      }
    });


  }
  ngOnInit() {
  }

  // PLAN
  bindFrmPLAN() {
    this.frmPLAN = this.fb.group({

      planName: ["", [Validators.required]],
      durationType: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      sDate: ["", [Validators.required]],
      expiery: ["", [Validators.required]],
      price: ["", [Validators.required]],
      // MentorId: ["", ],
    });
    this.frmPLAN.valueChanges.subscribe((data) => {
      this.logValidationErrorPLAN(this.frmPLAN);
    });
  }
  formErrorsPLAN = {
    planName: '',
    durationType: '',
    duration: '',
    sDate: '',
    expiery: '',
    price: '',
  };
  errorMessagesPLAN = {
    planName: { 'required': "Enter planName" },
    durationType: { 'required': "Enter durationType" },
    duration: { 'required': "Enter duration" },
    sDate: { 'required': "Enter sDate" },
    expiery: { 'required': "Enter expiery" },
    price: { 'required': "Enter price" }
  }
  logValidationErrorPLAN(group: FormGroup = this.frmPLAN): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorPLAN(abstractControl);
      } else {
        this.formErrorsPLAN[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesPLAN[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsPLAN[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(frm) {

  }
  addupdatePlan(p) {
    if (this.cPLAN == null) {
      this.addPlan(p);
    } else {
      this.updatePlan(p);

    }
  }
  cPLAN: any = null;
  addPlan(p) {
    var par = {
      planName: p.planName,
      price:p.price,
      durationType: p.durationType,
      duration: p.duration,
      sDate: p.sDate,
      expiery: p.expiery,
      MentorId: this.cMentor._id,

    };
    this.gbl.addPlan(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmPLAN.reset()
        this.getPlan(this.cMentor._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  updatePlan(p) {
    var par = {
      id: this.cPLAN._id,
      planName: p.planName,
      durationType: p.durationType,
      duration: p.duration,
      sDate: p.sDate,
      expiery: p.expiery,
      MentorId: this.cMentor._id,

    };
    this.gbl.updatePlan(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmPLAN.reset()
        this.getPlan(this.cMentor._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  getPlan(_id) {
    var p1 = {
      MentorId:_id,
    }
    this.gbl.getPlan(p1).subscribe(data => {
      this.PLANs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  deletePlan(_id){
    var par={
      _id:_id
    }
    this.gbl.deleteSignal(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
          this.getPlan(this.cMentor._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
