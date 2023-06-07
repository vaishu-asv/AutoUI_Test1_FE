import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},

  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},

  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
