import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './menu/profile/profile.component';
import { FreecashComponent } from './menu/freecash/freecash.component';
import { FavouriteComponent } from './menu/favourite/favourite.component';
import { ContactUSComponent } from './menu/contact-us/contact-us.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { WhatsNewComponent } from './menu/whats-new/whats-new.component';
import { HelpSupportComponent } from './menu/help-support/help-support.component';
import { Tab1Page } from './tabs/tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('./tabs/tab1/tab1.page').then(m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tabs/tab2/tab2.page').then(m => m.Tab2Page)
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tabs/tab3/tab3.page').then(m => m.Tab3Page)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },{
    path:'menu',
    loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent),
  },  {
    path:'profile',
    loadComponent: () => import('./menu/profile/profile.component').then(m => m.ProfileComponent)
  },

      {
        path: 'freecash',
        loadComponent: () => import('./menu/freecash/freecash.component').then(m => m.FreecashComponent)
      },
      {
        path: 'favourite',
        loadComponent: () => import('./menu/favourite/favourite.component').then(m => m.FavouriteComponent)
      },
      {
        path: 'contactus',
        loadComponent: () => import('./menu/contact-us/contact-us.component').then(m => m.ContactUSComponent)
      },
      {
        path: 'aboutus',
        loadComponent: () => import('./menu/about-us/about-us.component').then(m => m.AboutUsComponent)
      },
      {
        path: 'whatsnew',
        loadComponent: () => import('./menu/whats-new/whats-new.component').then(m => m.WhatsNewComponent)
      },
      {
        path: 'help',
        loadComponent: () => import('./menu/help-support/help-support.component').then(m => m.HelpSupportComponent)
      },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
