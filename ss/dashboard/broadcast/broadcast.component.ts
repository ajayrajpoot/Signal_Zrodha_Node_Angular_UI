import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  frmSIGNAL: any;
  SIGNALs: any;
  PLANs: any;
  cSubscriber: any;
  cMentor: any;
  MENTORs: any;
  mySubscribeMENTORs: any;
  mySignals: any;
  constructor(private fb: FormBuilder, public gbl: GlobalService) {
    this.getSignal(0);
    this.getallMentor();
    this.gbl.logedUser.subscribe(data => {
      console.log(">>>>>>cSubscriber:", data)
      this.cSubscriber = data;
      if (this.cSubscriber != null) {
        this.mySubscribeMentor(this.cSubscriber._id);
        this.getSubscrivedMentorSignal(this.cSubscriber._id);
        this.getBuyedPlanSignal(this.cSubscriber._id);

      }
    });
    this.gbl.logedMentor.subscribe(data => { this.cMentor = data; });
  }
  ngOnInit() {
  }
  getSignal(MentorId) {
    var p1 = {
      MentorId: MentorId
    }
    this.gbl.getSignal(p1).subscribe(data => {
      this.SIGNALs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  getSubscrivedMentorSignal(subscriberId) {
    var p1 = {
      subscriberId: subscriberId
    }
    this.gbl.getSubscrivedMentorSignal(p1).subscribe(data => {
      this.mySignals = data.mySignal;
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

  mySubscribeMentor(subscriberId) {
    var p1 = {
      subscriberId: subscriberId
    }
    this.gbl.mySubscribeMentor(p1).subscribe(data => {
      this.mySubscribeMENTORs = data.myMentors;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  subscribeMentor(p) {
    var p1 = {
      subscriberId: this.cSubscriber._id,
      mentorId: p._id,
      status: 1
    }
    this.gbl.subscribeMentor(p1).subscribe((data: any) => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.mySubscribeMentor(this.cSubscriber._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  unsubscribeSubscribedMentor(p) {
    var p1 = {
      _id: p._id
    }
    this.gbl.unsubscribeSubscribedMentor(p1).subscribe(data => {
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.mySubscribeMentor(this.cSubscriber._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  myPlamSignals: any;
  myPSignals: any = [];
  getBuyedPlanSignal(subscriberId) {
    var p1 = {
      subscriberId: subscriberId
    }
    this.gbl.getBuyedPlanSignal(p1).subscribe(data => {
      this.myPlamSignals = data.myPlamSignals;
      var me = this;
      // this.myPlamSignals.forEach(pl => {
      //   pl.signal.forEach(sig => {
      //     me.myPSignals.push(sig);
      //   });
      // });
      console.log("myPSignals",this.myPlamSignals);
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
}
