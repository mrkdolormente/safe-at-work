import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterInstitutionComponent } from './register-institution/register-institution.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [RegisterInstitutionComponent, RegisterUserComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule],
})
export class RegisterModule {}
