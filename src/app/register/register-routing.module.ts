import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./register-user/register-user.module').then((m) => m.RegisterUserModule),
  },
  {
    path: 'institution',
    loadChildren: () =>
      import('./register-institution/register-institution.module').then(
        (m) => m.RegisterInstitutionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
