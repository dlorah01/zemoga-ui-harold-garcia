import { Component, OnInit, Input } from '@angular/core';
import { ProgressBar } from './progress-bar.model';

@Component({
  selector: 'zmg-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  
  thumbsUp: number;
  thumbsDown: number;

  @Input()
  public get votes(): ProgressBar {
    return this._votes;
  }
  public set votes(value: ProgressBar) {
    this._votes = value;
    this.thumbsUp = value.thumbsUp / value.total * 100;
    this.thumbsDown = value.thumbsDown / value.total * 100;
  }
  private _votes: ProgressBar;

  constructor() { }

  ngOnInit() {
  }


}
