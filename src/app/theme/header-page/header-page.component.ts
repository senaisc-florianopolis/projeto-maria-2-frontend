import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor() { }

  @Input('routeName') routeName: string;
  @Input('routePath') routePath: string;

  ngOnInit() {
    this.routeName = "Default"
    this.routePath = "Home > Default"
  }

}
