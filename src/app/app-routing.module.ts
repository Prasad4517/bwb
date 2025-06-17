import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './menu/profile/profile.component';
import { FreecashComponent } from './menu/freecash/freecash.component';
import { FavouriteComponent } from './menu/favourite/favourite.component';
import { ContactUSComponent } from './menu/contact-us/contact-us.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { WhatsNewComponent } from './menu/whats-new/whats-new.component';

import { storepage } from './tabs/tab1/store.page';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'store',
        loadComponent: () => import('./tabs/tab1/store.page').then(m => m.storepage)
      },
      {
        path: 'home',
        loadComponent: () => import('./tabs/tab2/home.page').then(m => m.homepage)
      },
      {
        path: 'orders',
        loadComponent: () => import('./tabs/tab3/orders.page').then(m => m.orderspage)
      },{
        path:'auction',
        loadComponent: () => import('./tabs/tab4/auction.page').then(m => m.AuctionPage)
      },
      {
        path: '',
        redirectTo: 'store',
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

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
