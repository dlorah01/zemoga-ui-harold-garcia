import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../components/home/card/card.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private defaultData: Card[] = [
    {
      name: 'Kanye West',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/kanye-west.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Mark Zuckerberg',
      category: 'Business',
      backgroundUrl: '../../../assets/mark-zuckerberg.png',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Cristina Fernández de Kirchner',
      category: 'Politics',
      backgroundUrl: '../../../assets/cristina-fernandez.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Malala Yousazai',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/malala.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    }
  ];

  private _votes: Card[] = this.storageService.votes || this.defaultData;
  private get votes(): Card[] {
    return this._votes;
  }
  private set votes(value: Card[]) {
    this._votes = value;
  }

  private cards$ = new BehaviorSubject<Card[]>(this.votes);
  cards = this.cards$.asObservable();

  constructor(private readonly storageService: StorageService) {}

  thumbs(index: number, thumbs: boolean) {
    this.votes[index].votes.total = this.votes[index].votes.total + 1;
    if (thumbs) {
      this.votes[index].votes.thumbsUp = this.votes[index].votes.thumbsUp + 1;
    } else {
      this.votes[index].votes.thumbsDown = this.votes[index].votes.thumbsDown + 1;
    }
    this.storageService.votes = this.votes;
    this.cards$.next(this.votes);
  }
}
