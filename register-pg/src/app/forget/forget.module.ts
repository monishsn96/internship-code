import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetComponent } from './forget.component';
import { ForgetRoutingModule } from './forget-routing.module';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[ {path: 'login' , component: LogInComponent }];
@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule,
    ForgetRoutingModule,
  ],
  providers: [],
  bootstrap: [ForgetComponent]
})
export class ForgetModule { }
