import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrialsRoutingModule } from './past-trials-routing.module';
import { PastTrialsComponent } from './past-trials.component';


@NgModule({
  declarations: [PastTrialsComponent],
  imports: [
    CommonModule,
    PastTrialsRoutingModule
  ]
})
export class PastTrialsModule { }
