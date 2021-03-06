import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:2000/';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) { }

  registerUser(payload: object): Observable<any> {
    return this.http.post(url + 'register', payload, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  loginUser(payload: object): Observable<any> {
    return this.http.post(url + 'login', payload, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

}