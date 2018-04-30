import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogged: boolean;
  public username: string;


  constructor(private router: Router) {

    this.router.events.subscribe(e => {
      this.isLogged = sessionStorage.getItem('username') !== null;
      this.username = sessionStorage.getItem('username');
    });
  }

  logout(): void {
    this.isLogged = false;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
