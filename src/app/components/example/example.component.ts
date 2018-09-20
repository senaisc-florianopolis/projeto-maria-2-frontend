import { ExampleService } from './example.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private service: ExampleService, private router: Router) { }

  data = [];

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.service.get().subscribe(data =>
        this.data = data,
        error => console.log(error)
    );
  }

}
