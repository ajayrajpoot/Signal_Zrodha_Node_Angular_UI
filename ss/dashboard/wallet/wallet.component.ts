import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  wallets: any;

  constructor(public gbl: GlobalService) {
    this.GET_WALLET();
    this.GET_PAYMANUAL();
  }

  ngOnInit(): void {
  }



  GET_WALLET() {
    var p1 = {
      WalletId: 0
    }
    this.gbl.GET_WALLET(p1).subscribe(data => {
      this.wallets = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  walletParms = {
    Status: 1,
    Name: '',
    Email: '',
    Password: '',
    Phone: '',
    Country: '',
    ZipCode: ''
  }
  cWallet: any;
  CREATE_WALLET(p) {
    var p1 = {
      Status: 1,
      Name: '',
      Email: '',
      Password: '',
      Phone: '',
      Country: '',
      ZipCode: ''
    }
    this.gbl.CREATE_WALLET(p).subscribe(data => {
      if (data.ResultInt == 1) {

        this.walletParms = {
          Status: 1,
          Name: '',
          Email: '',
          Password: '',
          Phone: '',
          Country: '',
          ZipCode: ''
        }
        this.gbl.tostSuccess(data.Message);
        this.GET_WALLET();
      } else {
        this.gbl.tostError(data.Message);

      }

    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }


  DELETE_WALLETPROFILE() {
    var p1 = {
      WalletId: 0
    }
    this.gbl.DELETE_WALLETPROFILE(p1).subscribe(data => {
      this.wallets = data.users;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  manualPayment: any = {
    amount: 0,
    Comment: ''
  }
  amount: any = 0;
  ADD_PAYMANUAL(p) {
    //CREATE TABLE[dbo].[wallet_PayManual] (    [ID][int] IDENTITY(100,1) NOT NULL,

    var p1 = {
      ID: 0,
      LedgerId: '0',
      WalletId: this.cWallet.WalletId,
      Amount: this.manualPayment.amount,
      Receipt_Snap: '',
      Comment: this.manualPayment.Comment,
      Reference: '',
      Status: 1,
      ProcessedBy: this.cWallet.WalletId,
      CreatedOn: '',
      UpdatedOn: '',
    }
    this.gbl.ADD_PAYMANUAL(p1).subscribe(data => {
      if (data.ResultInt == 1) {
        this.amount = 0
        this.gbl.tostSuccess(data.Message);
        this.GET_PAYMANUAL();
      } else {
        this.gbl.tostError(data.Message);

      }

    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  paynetManual: any;
  GET_PAYMANUAL() {
    var p1 = {
      ID: 0
    }
    this.gbl.GET_PAYMANUAL(p1).subscribe(data => {
      this.paynetManual = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  APPROVE_MANUAL_PAY(p, Status) {
    var p1 = {
      ID: p.ID,
      LedgerId: p.LedgerId,
      WalletId: p.WalletId,
      Amount: p.Amount,
      Receipt_Snap: p.Receipt_Snap,
      Comment: "Aprrove By Admin",
      Reference: p.Reference,
      Status: Status,
      ProcessedBy: p.ProcessedBy,
      CreatedOn: '',
      UpdatedOn: '',

    }
    this.gbl.APPROVE_MANUAL_PAY(p1).subscribe(data => {
      if (data.ResultInt == 1) {
        this.amount = 0
        this.gbl.tostSuccess(data.Message);
        this.GET_PAYMANUAL();
        // this.ADD_LEDGER_ENTRY(p);
      } else {
        this.gbl.tostError(data.Message);

      }

    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  ADD_LEDGER_ENTRY(p) {
    var p1 = {

      ID: 0,
      WalletId: p.WalletId,
      Amount: p.Amount,
      Balance: 0,
      Comment: p.Comment,
      SourceRef: p.Reference,
      Reference: "",
      Source: 0,//0,1
      ShowtoDealer: 0,
      Auto_Manual: 0,
      TransCode:0,
      TransType: 0,
      Status: 0,//4
      AdmMsg: p.Comment,
      ExchRate: 0


      // ID: 0,
      // WalletId: p.WalletId,
      // Amount: p.Amount,
      // Balance: 0,
      // Comment: p.Comment,
      // SourceRef: p.Reference,
      // Reference: "",
      // Source: 0,//0,1
      // ShowtoDealer: 0,
      // Auto_Manual: 0,
      // TransCode:0,
      // TransType: 0,
      // Status: 0,//4
      // AdmMsg: p.Comment,
      // ExchRate: 0,


      // AdmMsg: "0",
// Amount: 1,
// Auto_Manual: 1,
// Balance: 0,
// Comment: "0",
// ExchRate: 0,
// ID: 0,
// Reference: "",
// ShowtoDealer: 0,
// Source: 0,
// SourceRef: "0",
// Status: 2,
// TransCode: null,
// TransType: 0,
// WalletId: 2565
    }
    this.gbl.ADD_LEDGER_ENTRY(p1).subscribe(data => {
      if (data.ResultInt == 1) {
        this.amount = 0
        this.gbl.tostSuccess(data.Message);
        this.GET_PAYMANUAL();
        this.GET_LEDGER_ENTRY()
      } else {
        this.gbl.tostError(data.Message);

      }

    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  paynetLedgerEntry:any;
  GET_LEDGER_ENTRY(){
    var p1 = {
    }
    this.gbl.GET_LEDGER_ENTRY(p1).subscribe(data => {
      this.paynetLedgerEntry = data.DtResult;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
