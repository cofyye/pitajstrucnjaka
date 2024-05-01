import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [],
  imports: [AuthModule, PanelModule],
  exports: [],
})
export class FeaturesModule {}
