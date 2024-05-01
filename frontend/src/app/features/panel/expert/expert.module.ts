import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { ExpertRoutingModule } from './expert-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexComponent } from './pages/index.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    IndexComponent,
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    ExpertRoutingModule,
    DividerModule,
    FormsModule,
    InputTextModule,
  ],
})
export class ExpertModule {}
