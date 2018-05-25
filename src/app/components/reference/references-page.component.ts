import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-references-page',
  templateUrl: './references-page.component.html',
  styleUrls: ['./references-page.component.css']
})
export class ReferencePageComponent implements OnInit {

  dog: string;
   
  constructor() {
    this.dog = "height: 0px"  }

  ngOnInit() {
  }

  summary(){
    this.dog = "height: 0px"
  }

}
