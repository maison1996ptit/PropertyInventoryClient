import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../features/dashboard/dashboard/dashboard.component';
import { DashboardService } from '../../core/services/dashboard.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DashboardService],
  exports: [DashboardComponent]
})
export class ContactModule { }