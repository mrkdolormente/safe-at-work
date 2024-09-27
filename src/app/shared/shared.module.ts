import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent, ContainerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [
    ContainerComponent,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    NavComponent,
  ],
})
export class SharedModule {}
