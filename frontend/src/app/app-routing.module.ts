import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fetchUserGuard } from './shared/guards/fetch-user.guard';
import { HomeComponent } from './home/home.component';
import { notAuthenticatedGuard } from './shared/guards/not-authenticated.guard';
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
    canActivateChild: [notAuthenticatedGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'panel/expert',
    canActivate: [fetchUserGuard],
    // canActivateChild: [authenticatedGuard],
    loadChildren: () =>
      import('./features/panel/expert/expert.module').then(
        (m) => m.ExpertModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
