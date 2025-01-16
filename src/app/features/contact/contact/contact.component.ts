import { Component, OnInit } from '@angular/core';
import { ContactService} from '../../../core/services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  standalone:true,
  selector: 'app-contact',
  imports: [FormsModule
            , CommonModule
            , Dialog
            , ButtonModule
            , InputTextModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data: any[] = [];
  totalRecords: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  fillter: string = "";
  editingItem: any = null;
  showDialog: boolean = false; 
  newItem = { 
    firstName: '', 
    lastName: '', 
    phoneNumber: '',
    emailAddress:'' 
  };
  visible: boolean = false;
  http: any;
  constructor(private contactService : ContactService) {}

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    this.contactService.getData(this.pageNumber, this.pageSize,this.fillter).subscribe(response => {
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
    console.log(req);
    this.contactService.UpdateData(req).subscribe({
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
      console.log(this.newItem);
      this.contactService.AddData(this.newItem).subscribe({
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

