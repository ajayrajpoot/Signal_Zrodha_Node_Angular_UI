import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  Service = {
    SSL: false,
    LIVE: false,
    END_POINT: 'TradeCopierAPI'
  };
token:any='';
  config = {
    AppName: "Admin",
    PrimaryUrl: "http://localhost:8082/api",
    walletUrl: "http://localhost:51400/wallet",
    img:"http://localhost:8082/api",
    web: "",
  };
  constructor(public http: HttpClient) {
  }
  readJSON(param) {
    try {
      return this.http.get<any>('./assets/' + param);
    } catch (e) {
      console.log(e);
    }
  }

  GetMethod(param: string) { return this.http.get<any>(param); }

  get(endPointg: string, params?: any, optn: any = 'PrimaryUrl') {
    let options_ : any = {
      responseType: "json",
      headers: new HttpHeaders({
          "Authorization": "Bearer "+this.token,
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

    let p = []; let newParam;
    if (params) { for (let k in params) { let str = k + '=' + params[k]; p.push(str); } newParam = p.join('&'); }
    try { let url = this.config[optn]; return this.http.get<any>(url + '/' + endPointg + '?' + newParam,options_); }
    catch (e) { console.log(e); }
  }

  post(endPointg: string, params?: any, optn: any = "PrimaryUrl") {
    if (!optn) { optn = { params: new HttpParams() }; };
    let options_ : any = {
      responseType: "json",
      headers: new HttpHeaders({
          "Authorization": `Bearer `+this.token,
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

    try { let url = this.config[optn]; return this.http.post<any>(url + '/' + endPointg, params,options_); } catch (e) { console.log(e); }
  }

  get1(endPointg: string, params?: any, optn: any = 'walletUrl') {
    let options_ : any = {
      responseType: "json",
      headers: new HttpHeaders({
          "Authorization": "Bearer "+this.token,
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

    let p = []; let newParam;
    if (params) { for (let k in params) { let str = k + '=' + params[k]; p.push(str); } newParam = p.join('&'); }
    try { let url = this.config[optn]; return this.http.get<any>(url + '/' + endPointg + '?' + newParam,options_); }
    catch (e) { console.log(e); }
  }

  post1(endPointg: string, params?: any, optn: any = "walletUrl") {
    if (!optn) { optn = { params: new HttpParams() }; };
    let options_ : any = {
      responseType: "json",
      headers: new HttpHeaders({
          "Authorization": `Bearer `+this.token,
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
  };

    try { let url = this.config[optn]; return this.http.post<any>(url + '/' + endPointg, params,options_); } catch (e) { console.log(e); }
  }
  put(endPointg: string, params?: any, optn: any = "PrimaryUrl") {
    if (!optn) { optn = { params: new HttpParams() }; };
    try { let url = this.config[optn]; return this.http.put<any>(url + '/' + endPointg, params); } catch (e) { console.log(e); }
  }
  // GetMethod1(param: string) { return this.http.get<any>(param); }
  delete(endPointg: string, params?: any, optn: any = 'PrimaryUrl') {
    let p = []; let newParam;
    if (params) { for (let k in params) { let str = k + '=' + params[k]; p.push(str); } newParam = p.join('&'); }
    try { let url = this.config[optn]; return this.http.delete<any>(url + '/' + endPointg + '?' + newParam); }
    catch (e) { console.log(e); }
  }
  webSocket(domain: string, param?: any) {
    var fws = new WebSocket(domain); fws.onopen = function () { fws.send(param); /* Send the message 'Ping' to the server*/ }; return fws;
  }
}
