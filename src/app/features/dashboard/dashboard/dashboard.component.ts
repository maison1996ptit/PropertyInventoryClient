import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  standalone :true,
  selector: 'app-dashboard',
  imports:[CommonModule
              , Dialog
              , ButtonModule
              , InputTextModule,
              NgxPaginationModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  totalRecords: number = 0;
  pageSize: number = 3;
  pageNumber: number = 1;
  fillter: string = "";

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dashboardService.getData(this.pageNumber, this.pageSize,this.fillter).subscribe(response => {
      this.data = response;  
      this.totalRecords = response.length; 
    });
  }

  onPageChange(event :any): void {
    this.pageNumber = event+1;
    this.loadData(); 
  }
  get totalPages(): number {
    return 2;
  }
}
