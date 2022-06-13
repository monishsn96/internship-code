import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInRoutingModule } from './log-in-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetComponent } from '../forget/forget.component';
import { LogInComponent } from './log-in.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [ { path: 'forget', component:ForgetComponent}];
@NgModule({
  declarations: [ForgetComponent],
  imports: [
  BrowserModule, LogInRoutingModule,
  CommonModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [LogInComponent]
})
export class LogInModule { }
