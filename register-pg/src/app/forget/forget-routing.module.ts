import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';


const routes: Routes =[ {path: 'login' , component: LogInComponent }]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
,    CommonModule
  ]
})
export class ForgetRoutingModule { }
