import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './exercice/inscription/inscription.component';
import { UserComponent } from './exercice/user/user.component';

const routes: Routes = [
  { path: '', component: InscriptionComponent },
  { path: 'user', component: UserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
