import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './auction.page.html',
  styleUrls: ['./auction.page.scss']
})
export class AuctionPage {
  auctions = [
    {
      id: 1,
      title: 'Antique Wooden Chair',
      image: 'assets/photos/royalenfild.jpg',
      currentBid: 180000,
      endTime: '2025-06-20 18:00'
    },
    {
      id: 2,
      title: 'plot for sale in pune',
      image: 'assets/photos/plotpune.jpg',
      currentBid: 4500000,
      endTime: '2025-06-22 20:00'
    },{
      id: 3,
      title: 'Samsung Smart LED TV 55"',
      image: 'assets/photos/samsungledtv.jpg',
      currentBid: 67999,
      endTime: '2025-06-25 15:00'
    },
    {
      id: 4,
      title: 'iPhone 14 Pro Max',
      image: 'assets/photos/iphone14.jpg',
      currentBid: 129999,
      endTime: '2025-06-30 12:00'
    },
    {
      id: 5,
      title: 'Dining Table Set',
      image: 'assets/photos/dinningset.jpg',
      currentBid: 15999,
      endTime: '2025-07-05 10:00'
    }
  ];

  bid(auctionId: number) {
    alert(`Place bid for Auction ID: ${auctionId}`);
  }
}
