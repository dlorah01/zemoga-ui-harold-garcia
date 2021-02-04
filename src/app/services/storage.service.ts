import { Injectable } from '@angular/core';
import { Card } from '../components/home/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public get votes(): Card[] {
    return JSON.parse(localStorage.getItem('zmgVotes'));
  }
  public set votes(value: Card[]) {
    localStorage.setItem('zmgVotes', JSON.stringify(value));
  }
}
