import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../service/global.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-my-plan',
  templateUrl: './my-plan.component.html',
  styleUrls: ['./my-plan.component.scss']
})
export class MyPlanComponent implements OnInit {
  @ViewChild('subscribeModalClose', { static: false }) subscribeModalClose;

  // @ViewChild('myModal', { static: false }) myModal: ModalDirective;
  frmPLAN: any;
  PLANs: any;
  cMentor: any;
  cSubscriber: any;
  myplans: any;
  constructor(
    private fb: FormBuilder,
    public gbl: GlobalService
  ) {
    // this.subscriberId(this.cSubscriber._id);
    this.gbl.logedUser.subscribe(data => {
      this.cSubscriber = data;
      this.subscribeSubscribedPlan(this.cSubscriber._id);
    });
    this.getPlan()
    this.gbl.logedMentor.subscribe(data => { this.cMentor = data; });
  }
  ngOnInit() {
  }

  // PLAN

  getPlan(planId = 0) {
    var p1 = {
      MentorId: planId
    }
    this.gbl.getPlan(p1).subscribe(data => {
      this.PLANs = data;
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  subscribeSubscribedPlan(subscriberId) {
    var par = {
      subscriberId: subscriberId
    };
    this.gbl.subscribeSubscribedPlan(par).subscribe((data: any) => {
      this.myplans = data.myplans;

    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  closePayModal() {
    console.log("closePayModal");
    this.subscribeModalClose.nativeElement.click();
  }
  cPlan: any;
  cSunscribePlan:any='';
  subscribePlan(p) {
    var par = {
      subscriberId: this.cSubscriber._id,
      planId: p._id,
      durationType: p.durationType,
      duration: p.duration,
      sDate: p.sDate,
      expiery: p.expiery,
      status: 0,
      price:p.price,
      paymentStatus:1,
    };
    this.gbl.subscribePlan(par).subscribe((data: any) => {
      // @ViewChild('subscribeModalClose',{ static: false }) subscribeModalClose1;
      // this.subscribeModalClose.nativeElement.click();
      this.closePayModal();
        console.log(">>>>Data:",data);
        console.log(">>>>Data:",data.data);
        this.cSunscribePlan=data.data;
      if (data.Result == true) {
        this.gbl.tostSuccess(data.Message);
        this.subscribeSubscribedPlan(this.cSubscriber._id);
      } else {
        this.gbl.tostError(data.Message);
      }
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }
  unsubscribesubscribePlan(_id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        var par = {
          _id: _id
        };
        this.gbl.unsubscribeSubscribedPlan(par).subscribe((data: any) => {
          if (data.Result == true) {
            this.gbl.tostSuccess(data.Message);
            this.subscribeSubscribedPlan(this.cSubscriber._id);
            Swal.fire(
              'Deleted!',
              data.Message,
              'success'
            )
          } else {
            this.gbl.tostError(data.Message);
            Swal.fire(
              'Cancelled',
              data.Message,
              'error'
            )
          }
        }, error => {
          this.gbl.tostError("Server Not respond");
        })



        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }

}
