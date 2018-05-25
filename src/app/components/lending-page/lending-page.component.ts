import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lending-page',
  templateUrl: './lending-page.component.html',
  styleUrls: ['./lending-page.component.css']
})
export class LendingPageComponent implements OnInit {

  dog: string;
  display: string;
  
  constructor() {
    this.dog = "height: 0px" ;
    this.display = "lending"; 
  }

  lendingP(){
    this.display = "lending"; 
  }
  summaryP(){
    this.display = "summary"; 
  }
  experienceP(){
    this.display = "experience"; 
  }
  portfolioP(){
    this.display = "portfolio"; 
  }
  referenceP(){
    this.display = "reference"; 
  }

  ngOnInit() {
  }

  summary(){
    this.dog = "height: 0px"
  }

}
