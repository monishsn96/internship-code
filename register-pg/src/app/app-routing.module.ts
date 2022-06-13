import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [ { path: 'login', component:LogInComponent },
{path:'forgtp' , component : ForgetComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
   //routes: Routes = [ { path: 'login', component:LogInComponent }];
 }
