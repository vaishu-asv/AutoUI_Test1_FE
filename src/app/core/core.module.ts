import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateWhatIfAnalysisComponent } from './create-what-if-analysis/create-what-if-analysis.component';


@NgModule({
  declarations: [
    CreateWhatIfAnalysisComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
