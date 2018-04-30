import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:2000/';

@Injectable()
export class CreditService {

  constructor(private http: HttpClient) { }

  getCredits(page: number): Observable<any> {
    return this.http.get(url + `credits/${page}`);
  }

  createCredit(payload: object): Observable<any> {
    return this.http.post(url + 'create', payload, {
      headers: new HttpHeaders()
        .set('Authorization', 'bearer ' + sessionStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

  getCreditById(id: string): Observable<any> {
    return this.http.get(url + `credit/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  addNote(note: string, creditId: string): Observable<any> {
    return this.http.post(url + `note/${creditId}`, { note }, {
      headers: new HttpHeaders()
        .set('Authorization', 'bearer ' + sessionStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

  changeStatus(status: string, creditId: string): Observable<any> {
    return this.http.post(url + `status/${creditId}`, { status }, {
      headers: new HttpHeaders()
        .set('Authorization', 'bearer ' + sessionStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    })
  }

  calcTime(input: string): string {
    let diff = +new Date - (+new Date(input));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value: any): any {
      if (value !== 1) {
        return 's';
      } else {
        return '';
      }
    }
  }

}