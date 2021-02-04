import { ProgressBar } from '../progress-bar/progress-bar.model';

export interface Card {
  backgroundUrl: string;
  name: string;
  category: string;
  votes: ProgressBar;
}
