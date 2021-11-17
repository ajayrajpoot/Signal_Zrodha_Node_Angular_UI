import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-permition',
  templateUrl: './permition.component.html',
  styleUrls: ['./permition.component.scss']
})
export class PermitionComponent implements OnInit {
  @ViewChild('closePermitionModalBtn') closeBtn: ElementRef;
  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  frmPERMISSION: any;
  PERMISSIONs: any;

  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private sanitized: DomSanitizer,
    public gbl: GlobalService) {
    this.bindFrmPERMISSION();
    this.GET_PERMISSION();
  }
  ngOnInit() {
  }

  bindFrmPERMISSION() {
    this.frmPERMISSION = this.fb.group({
      permission: ['', [Validators.required]],
      url: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.frmPERMISSION.valueChanges.subscribe((data) => {
      this.logValidationErrorPERMISSION(this.frmPERMISSION);
    });
  }
  formErrorsPERMISSION = {
    permission: '',
    url: '',
    description: ''
  };
  errorMessagesPERMISSION = {
    permission: { 'required': 'Enter permission.' },
    url: { 'required': 'Enter url.' },
    description: { 'required': 'Enter description.' }
  }
  logValidationErrorPERMISSION(group: FormGroup = this.frmPERMISSION): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorPERMISSION(abstractControl);
      } else {
        this.formErrorsPERMISSION[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesPERMISSION[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsPERMISSION[key] += messages[errorKey] + ' ';
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
  GET_PERMISSION() {
    this.gbl.GET_PERMISSION({}).subscribe(data => {
      if (data.DtResult.length > 0) {
        this.cPERMISSION = data.DtResult;
      } else {

      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  cPERMISSION: any = null;
  ADD_PERMISSION(p) {
    var p1 = {
      permission_id: this.cPERMISSION == null ? 0 : this.cPERMISSION.permission_id,
      permission: p.permission,
      description: p.description,
      url: p.url

    }
    this.gbl.ADD_PERMISSION(p1).subscribe(data => {
      if (data.ResultInt > 0) {
        this.gbl.tostSuccess(data.Message);
        this.GET_PERMISSION();
        this.frmPERMISSION.reset();
        this.cPERMISSION = null;
        this.closeModal();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  DELETE_PERMISSION(permission_id) {
    var p1 = {
      permission_id: permission_id
    }
    this.gbl.DELETE_PERMISSION(p1).subscribe(data => {
      this.GET_PERMISSION();
    })
  }
}
