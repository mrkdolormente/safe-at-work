import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInstitutionComponent } from './register-institution.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterInstitutionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInstitutionRoutingModule {}
