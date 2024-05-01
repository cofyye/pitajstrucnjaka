import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fetchUserGuard } from './shared/guards/fetch-user.guard';
import { HomeComponent } from './home/home.component';
import { authenticatedGuard } from './shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [fetchUserGuard],
  },
  {
    path: 'auth',
    canActivate: [fetchUserGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'panel/expert',
    canActivate: [fetchUserGuard, authenticatedGuard],
    loadChildren: () =>
      import('./features/panel/expert/expert.module').then(
        (m) => m.ExpertModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
