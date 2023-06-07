import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';


@NgModule({
  declarations: [
    BaseLineListFinalComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ,	QuickUiModule,
]
})
export class TestModule { }
