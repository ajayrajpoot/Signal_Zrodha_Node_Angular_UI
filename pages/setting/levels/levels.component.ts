import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {
  @ViewChild('closeLblModalBtn') closeBtn: ElementRef;
  cPERMISSION: any;
  ULPermition: any;
  private closeModal(): void {
    this.closeBtn.nativeElement.click();

    //   console.log(">>>>",    this.GET_PERMITION_BY_IDS('1'));
    // console.log(">>>>",  this.GET_PERMITION_BY_IDS('1,4'));
  }
  frmUSER_LEVEL: any;
  USER_LEVELs: any;

  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private sanitized: DomSanitizer,
    public gbl: GlobalService) {
    this.bindFrmUSER_LEVEL();
    this.GET_USER_LEVEL();
    this.GET_PERMISSION();
    this.GET_USER_LEVEL_WITH_PERMITION();
  }
  ngOnInit() {
  }

  bindFrmUSER_LEVEL() {

    this.frmUSER_LEVEL = this.fb.group({
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // permission: ['' ],
      permission: this.fb.array(this.PermisionList.map(x => !1)),
      // permition: this.fb.array([true,true]),
    });
    this.frmUSER_LEVEL.valueChanges.subscribe((data) => {
      this.logValidationErrorUSER_LEVEL(this.frmUSER_LEVEL);
    });

  }
  formErrorsUSER_LEVEL = {
    level: '',
    description: '',
    permission: ''
  };
  errorMessagesUSER_LEVEL = {
    level: { 'required': 'Enter level.' },
    description: { 'required': 'Enter description.' },
    permission: { 'required': 'Enter permission.' }
  }
  logValidationErrorUSER_LEVEL(group: FormGroup = this.frmUSER_LEVEL): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorUSER_LEVEL(abstractControl);
      } else {
        this.formErrorsUSER_LEVEL[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesUSER_LEVEL[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsUSER_LEVEL[key] += messages[errorKey] + ' ';
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
  PermisionList: any = [];
  addPermition(id) {
    var index = this.PermisionList.indexOf(id);
    if (index !== -1) {
      this.PermisionList.splice(index, 1);
      console.log(">>>>>>>  this.PermisionList:", this.PermisionList);
    } else {
      this.PermisionList.push(id);
      console.log(">>>>>>>  this.PermisionList:", this.PermisionList);
    }
  }
  convertToValue(key: string) {
    return this.frmUSER_LEVEL.value[key].map((x, i) => x && this[key][i]).filter(x => !!x);
  }
  bindLevel(i) {
    var ff: any = [];
    console.log(">>>>>>>>:p", i)

    console.log(">>>", this.PermisionList);
    var v = this.PermisionList.forEach(el => {
      console.log(">>>", i.permission);
      if (i.permission == null) {
        false;
      } else {
        ff.push(i.permission.includes(el.permission_id));
      }
    });
    var pp = { level: i.level, description: i.description, permission: ff }
    this.frmUSER_LEVEL.reset(pp);
  }
  callIds: any = [];
  GET_PERMITION_BY_IDS(ids) {

    this.gbl.GET_PERMITION_BY_IDS({ ids: ids }).subscribe(data => {
      this.ULPermition = data.DtResult;
      // var s='';
      // this.ULPermition.forEach(el => {
      //   s+="<li>"+el.permission+"</li>"
      // });
      //  return s;
      // } else {      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  GET_USER_LEVEL_WITH_PERMITION() {
    this.gbl.GET_USER_LEVEL_WITH_PERMITION({}).subscribe(data => {
      this.ULPermition = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  GET_PERMISSION() {
    this.gbl.GET_PERMISSION({}).subscribe(data => {
      if (data.DtResult.length > 0) {
        this.PermisionList = data.DtResult;
        this.bindFrmUSER_LEVEL();
      } else {

      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  cUSER_LEVEL: any = null;
  ADD_USER_LEVEL(p) {
    console.log(">>>>>>>>:i:", p)
    console.log(">>>>>>>>:", this.frmUSER_LEVEL.value)
    console.log(">>>>>>>>:", this.frmUSER_LEVEL.value.permission.map((v, i) => (v ? this.PermisionList[i].permission_id : null)))
    console.log(">>>>>>>>:", this.frmUSER_LEVEL.value.permission.map((v, i) => (v ? this.PermisionList[i].permission_id : null)).filter(v => v !== null).toString())
    var p1 = {
      level_id: this.cUSER_LEVEL == null ? 0 : this.cUSER_LEVEL.level_id,
      level: p.level,
      description: p.description,
      craeated_date: '',
      permission: this.frmUSER_LEVEL.value.permission.map((v, i) => (v ? this.PermisionList[i].permission_id : null)).filter(v => v !== null).toString()
    }

    this.gbl.ADD_USER_LEVEL(p1).subscribe(data => {
      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        this.GET_USER_LEVEL();
        this.frmUSER_LEVEL.reset();
        this.cUSER_LEVEL = null;
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  DELETE_USER_LEVEL(level_id) {
    var p1 = {
      level_id: level_id
    }
    this.gbl.DELETE_USER_LEVEL(p1).subscribe(data => {
      this.GET_USER_LEVEL();
    })
  }
}
