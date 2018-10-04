import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ExampleService {

  constructor(private http: Http) { }

  public get() {
    return this.http.get('http://localhost:3000/users').map(
      (res) => res.json()
    );
  }

  public post() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const content = JSON.stringify({
      name: 'foo',
      email: 'bar',
      password: 1
    })
    const options = new RequestOptions({ headers: headers });
    return this.http.post(
      'http://localhost:3000/users', content, options
    ).map((res) => {
      res.json();
    });
  }


}
