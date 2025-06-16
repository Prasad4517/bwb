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
      image: 'assets/images/chair.jpg',
      currentBid: 1200,
      endTime: '2025-06-20 18:00'
    },
    {
      id: 2,
      title: 'Vintage Camera',
      image: 'assets/images/camera.jpg',
      currentBid: 4500,
      endTime: '2025-06-22 20:00'
    }
  ];

  bid(auctionId: number) {
    alert(`Place bid for Auction ID: ${auctionId}`);
  }
}
