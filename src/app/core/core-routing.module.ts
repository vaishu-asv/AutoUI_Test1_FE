import { CreateWhatIfAnalysisComponent } from './create-what-if-analysis/create-what-if-analysis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-what-if-analysis', component: CreateWhatIfAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
