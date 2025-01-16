import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../features/dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../core/services/property.service';
import { PropertyComponent } from '../../features/property/property/property.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PropertyService],
  exports: [PropertyComponent]
})
export class PropertyModule { }