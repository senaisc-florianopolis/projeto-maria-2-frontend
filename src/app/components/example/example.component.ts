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
  pageName="Exemplo";
  
  ngOnInit() {
    this.getListUsers();
  }
	
  getListUsers() {
    this.service.get().subscribe(data => {
      console.log(data),
        this.data = data
    },
      error => console.log(error)
    );
  }

}
