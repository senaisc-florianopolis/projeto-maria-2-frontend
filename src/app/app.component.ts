import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLogged = localStorage.getItem('isLogged');
  constructor(private router: Router) { }

  ngOnInit() {
    /*if (this.isLogged != "true") {
      this.router.navigate(['/login'])
    } else {*/
      this.router.navigate(['/'])
    //}
  }
}



