import { Component } from '@angular/core';
import { CreditService } from '../../../services/credits/credits.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification/notify.service';
import { creditValidator } from './../../../util/creditValidation'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  public firstName: string;
  public lastName: string;
  public PIN: string;
  public phone: string;
  public email: string;
  public history: string;
  public amount: number;
  public repaymentPeriod: Date;
  public firstMaturityDate: Date;
  public interestRate: number;
  public duration: number;

  constructor(
    private creditService: CreditService,
    private router: Router,
    private notifyService: NotificationService) { }

  createCredit(): void {
    let payload = {
      borrower: {
        firstName: this.firstName,
        lastName: this.lastName,
        PIN: this.PIN,
        phone: this.phone,
        email: this.email,
        history: this.history
      },
      amount: this.amount,
      repaymentPeriod: new Date(this.repaymentPeriod),
      firstMaturityDate: new Date(this.firstMaturityDate),
      interestRate: this.interestRate,
      duration: this.duration
    };

    let validation = creditValidator(payload);


    if (validation['isValid']) {
      this.creditService.createCredit(payload).subscribe(res => {
        if (res['success']) {
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
