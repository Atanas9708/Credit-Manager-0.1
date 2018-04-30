import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public notifyService: NotificationService) { }

  logUser(): void {
    let payload = {
      username: this.email,
      password: this.password
    };

    if (!payload.username && !payload.password) {
      this.notifyService.errorAlert('Please fill all the input fields');
      return;
    }

    this.authService.loginUser(payload).subscribe(res => {
      if (res['success']) {
        sessionStorage.setItem('authtoken', res['token']);
        sessionStorage.setItem('username', res['user']['username']);
        sessionStorage.setItem('userId', res['user']['userId']);
        this.router.navigate(['/credits']);
        this.notifyService.successAlert(res['message']);        
      } else {
        console.log(res);
        this.notifyService.errorAlert(res['message']);
      }
    })
  }
}
