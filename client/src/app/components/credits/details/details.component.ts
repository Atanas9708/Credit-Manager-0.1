import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from '../../../services/credits/credits.service';
import { NotificationService } from '../../../services/notification/notify.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private sub: any;
  private id: string;
  private credit: object;
  private note: string;
  private notes: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditService: CreditService,
    private notifyService: NotificationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.creditService.getCreditById(this.id).subscribe(res => {
      if (res['success']) {
        console.log(res);
        this.credit = res['credit'];
        res['credit']['notes'].forEach(n => {
          n['createdOn'] = this.creditService.calcTime(n['createdOn']);
        });
        this.notes = res['credit']['notes'];
      }
    })
  }

  addNote(): void {
    if (this.note !== '' && this.note !== undefined && this.note !== null && this.note.length !== 0 && this.note.length < 101) {
      this.creditService.addNote(this.note, this.id).subscribe(res => {
        console.log(res['notes']);
        if (res['success']) {
          res['notes'].forEach(n => {
            n['createdOn'] = this.creditService.calcTime(n['createdOn']);
          });
          this.notes = res['notes'];
          document.getElementById('note')['value'] = '';
          this.note = '';
        }
      })
    } else {
      this.notifyService.errorAlert('A note must be between 1 and 100 characters long');
    }
  }

  onChange(newStatus: string): void {
    if (this.credit['status'] !== newStatus) {
      this.creditService.changeStatus(newStatus, this.id).subscribe(res => {
        console.log(res);
        if (res['success']) {
          this.router.navigate(['/credits']);
        }
      })
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
