import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertModule } from './expert/expert.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ExpertModule, ClientModule],
})
export class PanelModule {}
