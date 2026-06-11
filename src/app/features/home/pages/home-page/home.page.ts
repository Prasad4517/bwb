import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import {
  FeaturedProduct,
  HomeBanner,
  HomeContentService,
} from '../../data-access/home-content.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  readonly bargainBanners: HomeBanner[];
  readonly auctionBanners: HomeBanner[];
  readonly featuredProducts: FeaturedProduct[];

  constructor(
    private readonly homeService: HomeContentService,
    private readonly navController: NavController,
  ) {
    this.bargainBanners = this.homeService.getBargainBanners();
    this.auctionBanners = this.homeService.getAuctionBanners();
    this.featuredProducts = this.homeService.getFeaturedProducts();
  }

  goToStore(): void {
    void this.navController.navigateForward('/marketplace');
  }

  joinAuction(): void {
    void this.navController.navigateForward('/auctions');
  }

  openFavourites(): void {
    void this.navController.navigateForward('/favourites');
  }
}
