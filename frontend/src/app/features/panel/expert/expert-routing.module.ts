import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddAdComponent } from './pages/ads/add-ad/add-ad.component';
import { AdsListComponent } from './pages/ads/ads-list/ads-list.component';
import { AdEditComponent } from './pages/ads/ad-edit/ad-edit.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ChatComponent } from './pages/chats/components/chat/chat.component';
import { AllChatComponent } from './pages/chats/components/all-chat/all-chat.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full',
      },
      {
        path: 'ads',
        component: AdsListComponent,
        pathMatch: 'full',
      },
      {
        path: 'ads/add',
        component: AddAdComponent,
        pathMatch: 'full',
      },
      {
        path: 'ads/edit',
        component: AdEditComponent,
        pathMatch: 'full',
      },
      {
        path: 'chats',
        component: ChatsComponent,
        children: [
          {
            path: '',
            component: AllChatComponent,
            pathMatch: 'full',
          },
          {
            path: ':id',
            component: ChatComponent,
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertRoutingModule {}
