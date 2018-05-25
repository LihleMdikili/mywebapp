import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.css']
})
export class PopupPageComponent implements OnInit {

  dog: string;
   
  constructor(private route: Router) {
    this.dog = "height: 0px"  }

  ngOnInit() {
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'ltmdikili@gmail.com',
    //   from: 'test@example.com',
    //   subject: 'Sending with SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);

    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs

    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'test@example.com',
    //   from: 'test@example.com',
    //   subject: 'Sending with SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);
  }

  summary(){
    this.dog = "height: 0px"
  }

}
