import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  constructor(private router: Router) { }

  pageName="Canal";
  module="canal";

  ngOnInit() {
  }

}
