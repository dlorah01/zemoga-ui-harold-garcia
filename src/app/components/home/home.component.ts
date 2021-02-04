import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.model';
import { VoteService } from '../../services/vote.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'zmg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [];
  thumb: boolean;
  private readonly ngUnsubscribe = new Subject();

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.voteService.cards
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.cards = data);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
