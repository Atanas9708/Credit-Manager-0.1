import { Component, OnInit, OnChanges } from '@angular/core';
import { CreditService } from './../../../services/credits/credits.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  public activePage: number;
  public credits: object[];
  public pages: object = {};
  public result = {};

  constructor(
    public creditService: CreditService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (this.activePage !== +params['page']) {
          this.activePage = +params['page'] || 1;
          this.fetchPage();
        }
      })

  }

  fetchPage(): void {
    this.creditService.getCredits(this.activePage).subscribe(res => {
      console.log(res);
      if (res['success']) {
        this.credits = res['credits'];
        this.pages = res['pages'];
        this.result = res['pages']['result'];
      }
    })

  }

  onChange(term: string): void {
    switch (term) {
      case 'date':
        this.credits = this.credits.sort((a, b) => +new Date(a['creationDate']) - +new Date(b['creationDate']));
        break;
      case 'amount':
        this.credits = this.credits.sort((a, b) => b['amount'] - a['amount']);
        break;
      case 'duration':
        this.credits = this.credits.sort((a, b) => b['duration'] - a['duration']);
        break;
    }
  }

}
