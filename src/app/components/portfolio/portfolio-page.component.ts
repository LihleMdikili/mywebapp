import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioePageComponent implements OnInit {

  dog: string;
   
  constructor() {
    this.dog = "height: 0px"  }

  ngOnInit() {
  }

  summary(){
    this.dog = "height: 0px"
  }

}
