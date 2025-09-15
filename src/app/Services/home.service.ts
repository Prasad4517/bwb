import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {}

  /** 🛍️ Bargain Banners */
  getBargainBanners() {
    return [
      {
        image: 'assets/photos/royalenfild.jpg',
        title: '🔥 Best Deals Await!',
        subtitle: 'Bargain your way to big savings.'
      },
      {
        image: 'assets/photos/commercialoffice.jpg',
        title: '💬 Negotiate Online',
        subtitle: 'Chat with sellers & cut prices.'
      },
      {
        image: 'assets/photos/iphone14.jpg',
        title: '🎯 Get It At Your Price',
        subtitle: 'Don’t just shop, make the deal yours.'
      }
    ];
  }

  /** 🏆 Auction Banners */
  getAuctionBanners() {
    return [
      {
        image: 'assets/photos/mahindrabolero.jpg',
        title: '🏆 Live Auction',
        subtitle: 'Bid and win exclusive products.'
      },
      {
        image:  'assets/photos/trucktyre.jpg',
        title: '⚡ Flash Auction',
        subtitle: 'Grab deals before time runs out.'
      },
      {
        image: 'assets/photos/oneplus12R.jpg',
        title: '💎 Premium Auction',
        subtitle: 'Luxury items waiting for your bid.'
      }
    ];
  }

  /** ⭐ Featured Products (Optional for Home Page) */
  getFeaturedProducts() {
    return [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 1999,
        image: 'assets/photos/royalenfild.jpg',
        tag: 'Bargain Deal'
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 2999,
        image: 'assets/products/smartwatch.jpg',
        tag: 'Auction Highlight'
      }
    ];
  }
}
