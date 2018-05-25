import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  dog: string;
  
  constructor(private route: Router) {
    this.dog = "height: 0px"  }

  ngOnInit() {
  }

  home(){
    this.route.navigate([''])
  }
  portfolio(){
    this.route.navigate(['portfolio'])
  }
  reference(){
    this.route.navigate(['reference'])
  }

}
