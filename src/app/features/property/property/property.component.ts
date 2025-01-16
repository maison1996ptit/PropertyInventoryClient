import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../core/services/property.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  standalone:true,
  selector: 'app-property',
  imports: [FormsModule
            , CommonModule
            , Dialog
            , ButtonModule
            , InputTextModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent implements OnInit {
  data: any[] = [];
  totalRecords: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  fillter: string = "";
  editingItem: any = null;
  showDialog: boolean = false; 
  newItem = { 
    name: '', 
    address: '', 
    price: 0, 
  };
  visible: boolean = false;
  http: any;
  constructor(private properyService: PropertyService) {}

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    this.properyService.getData(this.pageNumber, this.pageSize,this.fillter).subscribe(response => {
      this.data = response;  
      this.totalRecords = response.totalRecords; 
      console.log(this.data); 
    });
  }
  isAnyEditing(): boolean {
    return this.editingItem !== null;
  }

  isEditing(item: any): boolean {
    return this.editingItem === item;
  }
  closeDialog() {
    this.showDialog = false;
  }


  onPageChange(event: any): void {
    this.pageNumber = event.pageIndex + 1;  
    this.loadData();  
  }
  onAdd(): void {
    this.showDialog = true;
  }
  onCreated(data:any){
    console.log(data);
  }
  onSave(req: any): void {
    this.properyService.UpdateData(req).subscribe({
      next: (response) => {
        alert('Property Updated successfully!');
        this.loadData();
      },
      error: (err) => {
        alert('Error Updating property: ' + err.message || err);
      }
    });
  }
  onEdit(item: any): void {
    if (this.editingItem === item) {
      
      this.editingItem = null;
    } else {
     
      this.editingItem = item;
    }
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.properyService.AddData(this.newItem).subscribe({
        next: (response) => {
          alert('Property Updated successfully!');
          this.loadData();
        },
        error: (err) => {
          alert('Error Updating property: ' + err.message || err);
        }
      });
      this.closeDialog(); 
    } else {
      console.log('Form is not valid');
    }
  }
  get totalPages(): number {
    return 2;
  }
}
