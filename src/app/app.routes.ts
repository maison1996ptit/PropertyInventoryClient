import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PropertyComponent } from './features/property/property/property.component';
import { ContactComponent } from './features/contact/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'contact', component: ContactComponent },
];
