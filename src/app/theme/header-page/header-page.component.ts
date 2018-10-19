import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor(private router: Router) { }

  @Input('routeName') routeName: string;


  ngOnInit() {
	  
  }
  
}
