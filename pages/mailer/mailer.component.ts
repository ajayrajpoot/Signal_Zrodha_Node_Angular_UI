import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/service/global.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.scss']
})
export class MailerComponent implements OnInit {
  

  constructor(public http: HttpClient,
    private fb: FormBuilder, 
    private sanitized: DomSanitizer,
    public gbl:GlobalService) { 
   
    }

  ngOnInit() {
  }
 
}
