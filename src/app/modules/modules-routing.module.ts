import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'advanced-search-result', component: AdvancedSearchResultComponent },

  { path: 'createschedule', component: CreatescheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
