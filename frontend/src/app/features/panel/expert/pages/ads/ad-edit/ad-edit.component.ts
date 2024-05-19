import { Component, ViewEncapsulation } from '@angular/core';
//import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ad-edit',
  templateUrl: './ad-edit.component.html',
  styleUrl: './ad-edit.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdEditComponent {
  checked: boolean = false;

  categories: string[];
  chosenCategories: string[] = [];
  selectedCategories: string[] = [];

  constructor() { // private messageService: MessageService // private confirmationService: ConfirmationService,
    this.categories = [
      'Education and Tutoring',
      'Health and Wellness',
      'Financial Services',
      'Technology and IT Support',
      'Legal Services',
      'Creative Arts',
      'Counseling and Therapy',
    ];
  }

  search(event: any) {
    const query = event.query;
    this.chosenCategories = this.categories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );
  }

  toggleChecked(newValue: boolean) {
    this.checked = newValue;
  }

  // confirm(event: Event) {
  //   this.confirmationService.confirm({
  //     target: event.target as EventTarget,
  //     message: 'Do you want to delete this record?',
  //     header: 'Delete Confirmation',
  //     icon: 'pi pi-info-circle',
  //     acceptButtonStyleClass: 'p-button-danger p-button-text',
  //     rejectButtonStyleClass: 'p-button-text p-button-text',
  //     acceptIcon: 'none',
  //     rejectIcon: 'none',

  //     accept: () => {
  //       this.messageService.add({
  //         severity: 'info',
  //         summary: 'Confirmed',
  //         detail: 'Record deleted',
  //       });
  //     },
  //     reject: () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Rejected',
  //         detail: 'You have rejected',
  //       });
  //     },
  //   });
  // }
}
