import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from '../forget/forget.component';
const routes: Routes = [ { path: 'forgetp', component:ForgetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)
,    CommonModule,
RouterModule.forChild([
  { path: 'forgetp', component: ForgetComponent }
])
  ],
  exports:[RouterModule]
})
export class LogInRoutingModule { }
