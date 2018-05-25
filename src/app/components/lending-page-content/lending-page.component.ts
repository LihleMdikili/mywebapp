import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-lending-page-content',
  templateUrl: './lending-page-content.component.html',
  styleUrls: ['./lending-page-content.component.css']
})
export class LendingPageContentComponent implements OnInit {

  dog: string;


   
  constructor(private route: Router) {}

  getInTouch(){
    this.route.navigate(['popup'])
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(PopPageComponent, {
  //     width: '250px',
  //     // data: { name: "Haa", animal: "dog" }
  //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });

  // }



  ngOnInit() {
  }

  summary(){
    this.dog = "height: 0px"
  }

}
