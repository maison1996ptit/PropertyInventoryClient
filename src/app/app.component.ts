import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PropertyComponent } from './features/property/property/property.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent
            , FooterComponent
            , RouterModule
            ,DashboardComponent,
            PropertyComponent,
          CommonModule,
          FormsModule ,
          NgxPaginationModule
      ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PropertyInventoryClient';
}