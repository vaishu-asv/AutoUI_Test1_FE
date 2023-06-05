import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';


@NgModule({
  declarations: [
    AdvancedSearchResultComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
