import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
// import { MessageService } from 'primeng';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public logedUserObj = new BehaviorSubject<any>(null);
  public logedUser = this.logedUserObj.asObservable();


  public logedMentorObj = new BehaviorSubject<any>(null);
  public logedMentor = this.logedMentorObj.asObservable();
  token: any = "";
  constructor(private router: Router,
    public rest: RestService,
    private messageService: MessageService,
  ) {
    this.loadData();
    this.loadDataMentor();

    this.token = this.rest.token;
  }

  changetoken(token) {
    this.rest.token = token;
  }

  signup(p) { return <any>this.rest.post("signup", p); }
  login(p) { return <any>this.rest.get("login", p); }
  getallsubscriber(p) { return <any>this.rest.get("getallsubscriber", p); }
  addsubscriber(p) { return <any>this.rest.post("addsubscriber", p); }
  updatesubscriber(p) { return <any>this.rest.post("updatesubscriber", p); }

  addMentor(p) { return <any>this.rest.post("addMentor", p); }
  updateMentor(p) { return <any>this.rest.post("updateMentor", p); }
  getallMentor(p) { return <any>this.rest.get("getallMentor", p); }
  deleteMentor(p) { return <any>this.rest.get("deleteMentor", p); }
  getAllMentorsPlans(p) { return <any>this.rest.get("getAllMentorsPlans", p); }
  loginMentor(p) { return <any>this.rest.get("loginMentor", p); }

  addPlan(p) { return <any>this.rest.post("addPlan", p); }
  updatePlan(p) { return <any>this.rest.post("updatePlan", p); }
  getPlan(p) { return <any>this.rest.get("getPlan", p); }

  subscribePlan(p) { return <any>this.rest.post("subscribePlan", p); }
  getSubscriberProfile(p) { return <any>this.rest.get("getSubscriberProfile", p); }
  unsubscribeSubscribedPlan(p) { return <any>this.rest.get("unsubscribeSubscribedPlan", p); }
  subscribeSubscribedPlan(p) { return <any>this.rest.get("subscribeSubscribedPlan", p); }

  getAllMentorsSubscribersPlans(p) { return <any>this.rest.get("getAllMentorsSubscribersPlans", p); }
  getMentorPlan(p) { return <any>this.rest.get("getMentorPlan", p); }
  addSignal(p) { return <any>this.rest.post("addSignal", p); }
  getSignal(p) { return <any>this.rest.get("getSignal", p); }
  getSubscrivedMentorSignal(p) { return <any>this.rest.get("getSubscrivedMentorSignal", p); }
  getBuyedPlanSignal(p) { return <any>this.rest.get("getBuyedPlanSignal", p); }
  deleteSignal(p) { return <any>this.rest.get("deleteSignal", p); }
  updateSignal(p) { return <any>this.rest.post("updateSignal", p); }

  mySubscribeMentor(p) { return <any>this.rest.get("mySubscribeMentor", p); }
  subscribeMentor(p) { return <any>this.rest.post("subscribeMentor", p); }
  unsubscribeSubscribedMentor(p) { return <any>this.rest.get("unsubscribeSubscribedMentor", p); }

  mql5currentweek(p) { return <any>this.rest.get("mql/current-week", p); }
  mql5previousweek(p) { return <any>this.rest.get("mql/previous-week", p); }
  mql5nextweek(p) { return <any>this.rest.get("mql/next-week", p); }
  mql5currentmonth(p) { return <any>this.rest.get("mql/current-month", p); }
  mql5previousmonth(p) { return <any>this.rest.get("mql/previous-month", p); }
  mql5nexttmonth(p) { return <any>this.rest.get("mql/next-month", p); }
  mql5calendarbydate(p) { return <any>this.rest.get("mql/calendarbydate", p); }
  mql5history(p):Observable<any> { return <any>this.rest.get("mql/history", p); }




  GET_WALLET(p):Observable<any> { return <any>this.rest.get1("GET_WALLET", p); }
  CREATE_WALLET(p):Observable<any> { return <any>this.rest.post1("CREATE_WALLET", p); }
  ADD_WALLET(p):Observable<any> { return <any>this.rest.get1("ADD_WALLET", p); }
  DELETE_WALLETPROFILE(p):Observable<any> { return <any>this.rest.get1("DELETE_WALLETPROFILE", p); }

  GET_PAYMANUAL(p):Observable<any> { return <any>this.rest.get1("GET_PAYMANUAL", p); }
  ADD_PAYMANUAL(p):Observable<any> { return <any>this.rest.post1("ADD_PAYMANUAL", p); }
  DELETE_PAYMANUAL(p):Observable<any> { return <any>this.rest.get1("DELETE_PAYMANUAL", p); }
  APPROVE_MANUAL_PAY(p):Observable<any> { return <any>this.rest.post1("APPROVE_MANUAL_PAY", p); }

  GET_LEDGER_ENTRY(p):Observable<any> { return <any>this.rest.get1("GET_LEDGER_ENTRY", p); }
  ADD_LEDGER_ENTRY(p):Observable<any> { return <any>this.rest.post1("ADD_LEDGER_ENTRY", p); }
  DELETE_LEDGER_ENTRY(p):Observable<any> { return <any>this.rest.get1("DELETE_LEDGER_ENTRY", p); }

  GET_INTERNAL_REQ(p):Observable<any> { return <any>this.rest.get1("GET_INTERNAL_REQ", p); }
  ADD_INTERNAL_REQ(p):Observable<any> { return <any>this.rest.post1("ADD_INTERNAL_REQ", p); }
  DELETE_INTERNAL_REQ(p):Observable<any> { return <any>this.rest.get1("DELETE_INTERNAL_REQ", p); }

  GET_CASHCARD_TRANS(p):Observable<any> { return <any>this.rest.get1("GET_CASHCARD_TRANS", p); }
  ADD_CASHCARD_TRANS(p):Observable<any> { return <any>this.rest.post1("ADD_CASHCARD_TRANS", p); }
  DELETE_CASHCARD_TRANS(p):Observable<any> { return <any>this.rest.get1("DELETE_CASHCARD_TRANS", p); }

  GET_CASHCARD(p):Observable<any> { return <any>this.rest.get1("GET_CASHCARD", p); }
  ADD_CASHCARD(p):Observable<any> { return <any>this.rest.post1("ADD_CASHCARD", p); }
  DELETE_CASHCARD(p):Observable<any> { return <any>this.rest.get1("DELETE_CASHCARD", p); }


  loadData() {
    var lo = JSON.parse(localStorage.getItem('sscuser'));
    console.log("loadDataMentor", lo);
    if (lo != null) {
      this.changetoken(lo.token);
      this.logedUserObj.next(lo.cdata);
    }
  }
  loadDataMentor() {
    var lo = JSON.parse(localStorage.getItem('sscmentor'));
    console.log("loadDataMentor", lo);
    if (lo != null) {
      this.changetoken(lo.token);
      this.logedMentorObj.next(lo.cdata);
    }
  }
  tostSuccess(msg) {
    this.messageService.add({ key: 'mytost', severity: 'success', summary: 'Success ', detail: msg });
  }
  tostInfo(msg) {
    this.messageService.add({ key: 'mytost', severity: 'info', summary: 'Info ', detail: msg });
  }
  tostError(msg) {
    this.messageService.add({ key: 'mytost', severity: 'error', summary: 'Error ', detail: msg });
  }
  tostClear() {
    this.messageService.clear();
  }


  redirect(url, params = null) {
    if (params == null) {
      this.router.navigate([url]);
    } else {
      this.router.navigate([url, params]);

    }

  }
}
