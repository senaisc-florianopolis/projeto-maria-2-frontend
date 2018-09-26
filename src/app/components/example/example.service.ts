import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from 'protractor';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class ExampleService {

  constructor(private http: Http, private _http: HttpClient) { }

  public get() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/').map(
      (res) => res.json()
    );
  }

  downloadFile(file: String) {
    const body = { filename: file };

    return this._http.post('http://localhost:3000/file/download', body, {
        responseType: 'blob',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
}

  public post() {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const content = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    const options = new RequestOptions({ headers: headers });
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',content, options
    ).map((res) => {
      res.json();
    });
   }


}
