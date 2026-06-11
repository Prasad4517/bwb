import { Injectable } from '@angular/core';

export interface HomeBanner {
  image: string;
  title: string;
  subtitle: string;
}

export interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  tag: string;
}

@Injectable({ providedIn: 'root' })
export class HomeContentService {
  getBargainBanners(): HomeBanner[] {
    return [
      {
        image: 'assets/photos/royalenfild.jpg',
        title: 'Find your next great deal',
        subtitle: 'Connect with sellers and negotiate a price that works for you.',
      },
      {
        image: 'assets/photos/commercialoffice.jpg',
        title: 'Make every purchase count',
        subtitle: 'Explore verified listings across vehicles, property, electronics, and more.',
      },
      {
        image: 'assets/photos/iphone14.jpg',
        title: 'Your price. Your choice.',
        subtitle: 'Compare listings, bargain confidently, and buy when the offer feels right.',
      },
    ];
  }

  getAuctionBanners(): HomeBanner[] {
    return [
      {
        image: 'assets/photos/mahindrabolero.jpg',
        title: 'Live vehicle auction',
        subtitle: 'Place your bid on commercial vehicles before time runs out.',
      },
      {
        image: 'assets/photos/trucktyre.jpg',
        title: 'Flash auction',
        subtitle: 'Act quickly on limited-time business and automotive deals.',
      },
      {
        image: 'assets/photos/oneplus12R.jpg',
        title: 'Premium electronics',
        subtitle: 'Bid on popular devices from trusted marketplace sellers.',
      },
    ];
  }

  getFeaturedProducts(): FeaturedProduct[] {
    return [
      {
        id: 1,
        name: 'Royal Enfield Classic 350',
        price: 195000,
        image: 'assets/photos/royalenfild.jpg',
        category: 'Bikes',
        tag: 'Open to bargain',
      },
      {
        id: 2,
        name: 'Commercial Office Space',
        price: 9500000,
        image: 'assets/photos/commercialoffice.jpg',
        category: 'Property',
        tag: 'Featured listing',
      },
      {
        id: 3,
        name: 'OnePlus 12R',
        price: 45999,
        image: 'assets/photos/oneplus12R.jpg',
        category: 'Mobiles',
        tag: 'Popular today',
      },
      {
        id: 4,
        name: 'Dining Table Set',
        price: 15999,
        image: 'assets/photos/dinningset.jpg',
        category: 'Furniture',
        tag: 'Great value',
      },
    ];
  }
}
