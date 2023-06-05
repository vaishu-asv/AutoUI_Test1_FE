import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'advanced-search-result', component: AdvancedSearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
