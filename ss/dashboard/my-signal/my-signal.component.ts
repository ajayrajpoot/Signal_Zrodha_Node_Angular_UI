import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-my-signal',
  templateUrl: './my-signal.component.html',
  styleUrls: ['./my-signal.component.scss']
})
export class MySignalComponent implements OnInit {

  frmSIGNAL: any;
  SIGNALs: any;
  PLANs: any;
  cSubscriber: any;
  cMentor: any;
  constructor(
    private fb: FormBuilder,
    public gbl: GlobalService
  ) {
    this.getSignal();
    this.bindFrmSIGNAL();


    this.gbl.logedUser.subscribe(data => { this.cSubscriber = data; });
    this.gbl.logedMentor.subscribe(data => {
       this.cMentor = data;
       if(this.cMentor!=null){}

       });
  }
  ngOnInit() {
  }

  // SIGNAL
  bindFrmSIGNAL() {
    this.frmSIGNAL = this.fb.group({

      isPublic: [true],
      package_id: [''],

      BSE_NSC: [''],
      BUY_SELL: [''],

      stockName: [''],
      Qty: [''],
      Price: [''],

      MIS_CNC: [''],

      orderType: [''],
      triggerPrice: [''],

      setStoploss: [false],
      stoploss_percent: [''],

      setTarget: [false],
      target_price: [''],


      variety: [''],
      validity: ['']
    });
    this.frmSIGNAL.valueChanges.subscribe((data) => {
      this.logValidationErrorSIGNAL(this.frmSIGNAL);
    });
  }
  formErrorsSIGNAL = {

    isPublic: "",
    package_id: "",
    BSE_NSC: "",
    BUY_SELL: "",
    stockName: "",
    Qty: "",
    Price: "",
    MIS_CNC: "",
    orderType: "",
    triggerPrice: "",
    setStoploss: "",
    stoploss_percent: "",
    setTarget: "",
    target_price: "",
    variety: "",
    validity: "",
  };
  errorMessagesSIGNAL = {
    isPublic: { 'required': "Enter isPublic" },
    package_id: { 'required': "Enter package_id" },
    BSE_NSC: { 'required': "Enter BSE_NSC" },
    BUY_SELL: { 'required': "Enter BUY_SELL" },
    stockName: { 'required': "Enter stockName" },
    Qty: { 'required': "Enter Qty" },
    Price: { 'required': "Enter Price" },
    MIS_CNC: { 'required': "Enter MIS_CNC" },
    orderType: { 'required': "Enter orderType" },
    triggerPrice: { 'required': "Enter triggerPrice" },
    setStoploss: { 'required': "Enter setStoploss" },
    stoploss_percent: { 'required': "Enter stoploss_percent" },
    setTarget: { 'required': "Enter setTarget" },
    target_price: { 'required': "Enter target_price" },
    variety: { 'required': "Enter variety" },
    validity: { 'required': "Enter validity" },

  }
  logValidationErrorSIGNAL(group: FormGroup = this.frmSIGNAL): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorSIGNAL(abstractControl);
      } else {
        this.formErrorsSIGNAL[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.errorMessagesSIGNAL[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrorsSIGNAL[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
  markFormTouched(frm) {

  }

  addUpdateSignal(p) {
    if (this.cSIGNAL == null) {
      this.addSignal(p);
    } else {
      this.updateSignal(p);

    }
  }
  cSIGNAL: any = null;
  addSignal(p) {
    var par = {
      Public: p.Public,
      package_id: p.package_id,
      BSE_NSC: p.BSE_NSC,
      BUY_SELL: p.BUY_SELL,
      stockName: p.stockName,
      Qty: p.Qty,
      Price: p.Price,
      MIS_CNC: p.MIS_CNC,
      orderType: p.orderType,
      triggerPrice: p.triggerPrice,
      setStoploss: p.setStoploss,
      stoploss_percent: p.stoploss_percent,
      setTarget: p.setTarget,
      target_price: p.target_price,
      variety: p.variety,
      validity: p.validity,
    };
    this.gbl.addSignal(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmSIGNAL.reset()
        this.getSignal();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  updateSignal(p) {
    var par = {
      id: this.cSIGNAL._id,
      Public: p.Public,
      package_id: p.package_id,
      BSE_NSC: p.BSE_NSC,
      BUY_SELL: p.BUY_SELL,
      stockName: p.stockName,
      Qty: p.Qty,
      Price: p.Price,
      MIS_CNC: p.MIS_CNC,
      orderType: p.orderType,
      triggerPrice: p.triggerPrice,
      setStoploss: p.setStoploss,
      stoploss_percent: p.stoploss_percent,
      setTarget: p.setTarget,
      target_price: p.target_price,
      variety: p.variety,
      validity: p.validity,
    };
    this.gbl.updateSignal(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.frmSIGNAL.reset()
        this.getSignal();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");

    })
  }
  getSignal() {
    var p1 = {
    }
    this.gbl.getSignal(p1).subscribe(data => {
      this.SIGNALs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  getPlan(MentorId) {
    var p1 = {
      MentorId:MentorId
    }
    this.gbl.getPlan(p1).subscribe(data => {
      this.PLANs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  deleteSignal(_id) {
    var par = {
      _id: _id
    }
    this.gbl.deleteSignal(par).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.getSignal();
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }


}
