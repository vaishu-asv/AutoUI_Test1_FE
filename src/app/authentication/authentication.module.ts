import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LacLoginComponent } from './lac-login/lac-login.component';


@NgModule({
  declarations: [
    LacLoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ,	QuickUiModule,
]
})
export class AuthenticationModule { }
