import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';


@NgModule({
  declarations: [
    AdvancedSearchResultComponent,
    CreatescheduleComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
