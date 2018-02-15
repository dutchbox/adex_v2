import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LuckyPage } from './lucky';

@NgModule({
  declarations: [
    LuckyPage,
  ],
  imports: [
    IonicPageModule.forChild(LuckyPage),
  ],
  exports: [
    LuckyPage
  ]
})
export class LuckyPageModule {}
