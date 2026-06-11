import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'marketplace',
        data: { headerTitle: 'Marketplace' },
        loadComponent: () =>
          import('./features/marketplace/pages/marketplace-page/marketplace.page').then(
            m => m.MarketplacePage,
          ),
      },
      {
        path: 'home',
        data: { headerTitle: 'BWB' },
        loadComponent: () =>
          import('./features/home/pages/home-page/home.page').then(m => m.HomePage),
      },
      {
        path: 'orders',
        data: { headerTitle: 'Orders' },
        loadComponent: () =>
          import('./features/orders/pages/orders-page/orders.page').then(m => m.OrdersPage),
      },
      {
        path: 'auctions',
        data: { headerTitle: 'Auctions' },
        loadComponent: () =>
          import('./features/auctions/pages/auctions-page/auctions.page').then(
            m => m.AuctionsPage,
          ),
      },
      { path: 'store', redirectTo: 'marketplace', pathMatch: 'full' },
      { path: 'auction', redirectTo: 'auctions', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'profile',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/profile/pages/profile-page/profile.component').then(
        m => m.ProfileComponent,
      ),
  },
  {
    path: 'rewards',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/rewards/pages/rewards-page/rewards.page').then(
        m => m.RewardsPage,
      ),
  },
  {
    path: 'favourites',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/favourites/pages/favourites-page/favourites.page').then(
        m => m.FavouritesPage,
      ),
  },
  {
    path: 'contact-us',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/contact-us/pages/contact-us-page/contact-us.component').then(
        m => m.ContactUSComponent,
      ),
  },
  {
    path: 'about-us',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/about-us/pages/about-us-page/about-us.component').then(
        m => m.AboutUsComponent,
      ),
  },
  {
    path: 'whats-new',
    data: { showAppHeader: false },
    loadComponent: () =>
      import('./features/whats-new/pages/whats-new-page/whats-new.component').then(
        m => m.WhatsNewComponent,
      ),
  },
  { path: 'freecash', redirectTo: 'rewards', pathMatch: 'full' },
  { path: 'favourite', redirectTo: 'favourites', pathMatch: 'full' },
  { path: 'contactus', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: 'aboutus', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'whatsnew', redirectTo: 'whats-new', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
