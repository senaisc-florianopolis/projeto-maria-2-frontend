import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estimativa',
  templateUrl: './estimativa.component.html',
  styleUrls: ['./estimativa.component.css']
})
export class EstimativaComponent implements OnInit {

  constructor(private router: Router) { }

  pageName="Estimativa";
  module="estimativa";
  
  ngOnInit() {
  }

}
