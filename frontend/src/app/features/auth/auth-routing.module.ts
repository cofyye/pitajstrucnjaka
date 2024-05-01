import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { notAuthenticatedGuard } from '../../shared/guards/not-authenticated.guard';
import { confirmEmailResolver } from './resolvers/confirm-email.resolver';
import { resetPasswordResolver } from './resolvers/reset-password.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [notAuthenticatedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    canActivate: [notAuthenticatedGuard],
  },
  {
    path: 'password/forgot',
    component: ForgotPasswordComponent,
    pathMatch: 'full',
    canActivate: [notAuthenticatedGuard],
  },
  {
    path: 'password/reset',
    component: ResetPasswordComponent,
    pathMatch: 'full',
    canActivate: [notAuthenticatedGuard],
    resolve: { isAllowed: resetPasswordResolver },
  },
  {
    path: 'verification/confirm',
    component: ConfirmEmailComponent,
    pathMatch: 'full',
    canActivate: [notAuthenticatedGuard],
    resolve: { isAllowed: confirmEmailResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
