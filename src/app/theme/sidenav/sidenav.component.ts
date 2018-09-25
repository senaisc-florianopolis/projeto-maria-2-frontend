import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  canal_active=false;
  produto_active=false;
  historico_active=false;
  familia_active=false;
  estimativa_active=false;

  ngOnInit() {
  }

}
