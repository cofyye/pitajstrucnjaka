import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  isSidebarVisible: boolean = true;
  minWidthForToggle = 768;

  constructor(private elementRef: ElementRef) {}

  toggleSidebar() {
    if (window.innerWidth >= this.minWidthForToggle) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    if (window.innerWidth < this.minWidthForToggle) {
      this.isSidebarVisible = false;
    }
  }
}
