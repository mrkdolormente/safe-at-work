import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
    DashboardComponent
  ],
    imports: [CommonModule, EmployerRoutingModule],
})
export class EmployerModule {}
