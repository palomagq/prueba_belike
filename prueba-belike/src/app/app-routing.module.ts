import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './modules/intranet/intranet.component';
import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
{component: RegistrationComponent ,path:'registration'},
{component: IntranetComponent ,path:'intranet'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
