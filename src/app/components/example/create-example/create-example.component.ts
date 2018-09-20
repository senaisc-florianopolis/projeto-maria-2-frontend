import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-create-example',
  templateUrl: './create-example.component.html',
  styleUrls: ['./create-example.component.css']
})
export class CreateExampleComponent implements OnInit {

  constructor(private service: ExampleService) { }

  response;

  ngOnInit() {
  }

  public testarPost() {
    this.service.post().subscribe(
        data => this.response = data, error => console.log(error), () => {
          alert("Sucesso")
        }
    );
  }

}
