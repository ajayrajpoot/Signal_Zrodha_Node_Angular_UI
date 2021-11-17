import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../service/global.service';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
  frmMENTOR: any;
  MENTORs: any;
  constructor(
    private fb: FormBuilder,
    public gbl: GlobalService
  ) {
    this.getallMentor();
    this.bindFrmMENTOR();
  }
  ngOnInit() {
  }

  // MENTOR
  bindFrmMENTOR() {
    this.frmMENTOR = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      name: ["", [Validators.required]],
      status: [true],

    });
    this.frmMENTOR.valueChanges.subscribe((data) => {
      this.logValidationErrorMENTOR(this.frmMENTOR);
    });
  }
  formErrorsMENTOR = {
    email: "",
    password: "",
    name: "",
  };
  errorMessagesMENTOR = {
    name: { 'required': "Enter name" },
    email: { 'required': "Enter email" },
    password: { 'required': "Enter password" },
  }
  logValidationErrorMENTOR(group: FormGroup = this.frmMENTOR): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorMENTOR(abstractControl);
      } else {
        this.formErrorsMENTOR[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesMENTOR[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsMENTOR[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(frm) {

  }

  addUpdateMentor(p){
    if(this.cMENTOR == null){
this.addMentor(p)
    }else{
      this.updateMentor(p)
    }
  }
  cMENTOR: any = null;
  addMentor(p) {
    var par = {
      id: 0,
      name: p.name,
      email: p.email,
      password: p.password,
      status: p.status
    };
    this.gbl.addMentor(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmMENTOR.reset()
        this.getallMentor();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  updateMentor(p) {
    var par = {
      id:  this.cMENTOR._id,
      name: p.name,
      email: p.email,
      password: p.password,
      status: p.status
    };
    this.gbl.updateMentor(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmMENTOR.reset()
        this.getallMentor();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  getallMentor() {
    var p1 = {
    }
    this.gbl.getallMentor(p1).subscribe(data => {
      this.MENTORs = data.mentor;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  currentMentor(p) {
    this.gbl.logedMentorObj.next(p);
    this.gbl.tostSuccess("Mentor Login Successfully")
  }
  deleteMentor(p){
    var par = {
      _id:  p._id
    };
    this.gbl.deleteMentor(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.getallMentor();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
