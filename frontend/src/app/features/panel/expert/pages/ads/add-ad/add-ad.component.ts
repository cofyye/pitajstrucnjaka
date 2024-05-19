import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrl: './add-ad.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AddAdComponent {
  categories: string[];
  suggestedCategories: string[] = [];
  selectedCategories: string[] = [];

  uploadedFiles: any[] = [];
  checked: boolean = false;

  constructor() {
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

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  toggleChecked(newValue: boolean) {
    this.checked = newValue;
  }

  // Function to generate the source URL for the file
  getFileSrc(file: any): string {
    // Replace 'your-base-url' with the actual base URL of your server
    return `your-base-url/${file.name}`;
  }

  search(event: any) {
    const query = event.query;
    this.suggestedCategories = this.categories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );
  }
}
