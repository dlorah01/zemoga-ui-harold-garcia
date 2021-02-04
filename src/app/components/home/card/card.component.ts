import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Card } from './card.model';
import { VoteService } from '../../../services/vote.service';

@Component({
  selector: 'zmg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  showVotes = true;
  voteForm: FormGroup;

  @Input()
  index: number;

  @Input()
  cardInfo: Card;

  constructor(private voteService: VoteService) { }

  submit() {
    this.voteService.thumbs(this.index, this.voteForm.get('thumb').value);
    this.voteForm.get('thumb').patchValue('');
    this.voteForm.markAsPristine();
    this.voteForm.markAsUntouched();
    this.showVotes = false;
  }

  ngOnInit(): void {
    this.voteForm = new FormGroup({
      thumb: new FormControl('')
    });
  }


}
