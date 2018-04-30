import { Component } from '@angular/core';
import { authValidator } from './../../../util/authValidation';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public email: string;
  public username: string;
  public password: string;
  public repeatPass: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService) { }

  regUser(): void {
    let payload: object = {
      email: this.email,
      username: this.username,
      password: this.password,
      repeatPass: this.repeatPass
    };


    let validation = authValidator(payload);

    if (validation['isValid']) {
      this.authService.registerUser(payload).subscribe(res => {
        if (res['success']) {
          sessionStorage.setItem('authtoken', res['token']);
          sessionStorage.setItem('username', res['user']['username']);
          sessionStorage.setItem('userId', res['user']['userId']);
          this.router.navigate(['/credits']);
          this.notifyService.successAlert(res['message']); 
        } else {
          this.notifyService.errorAlert(res['message']);
        }
      })
    } else {
      for (let obj in validation['errors']) {
        this.notifyService.errorAlert(validation['errors'][obj]);
      }
    }

  }
}
