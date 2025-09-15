import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class homepage {

bargainBanners: any[] = [];
  auctionBanners: any[] = [];
  featuredProducts: any[] = [];


bargainSlideOpts = {
  initialSlide: 0,
  speed: 500,
  autoplay: { delay: 2500 },
  loop: true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1.1
};

auctionSlideOpts = {
  initialSlide: 0,
  speed: 600,
  autoplay: { delay: 3000 },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal', // 👈 ensures swipe left/right
  effect: 'slide',          // 👈 changed from "fade" to "slide"
};

 

  constructor(private navCtrl: NavController,
              private homeService:HomeService ) {}

   ngOnInit() {
    this.bargainBanners = this.homeService.getBargainBanners();
    this.auctionBanners = this.homeService.getAuctionBanners();
    this.featuredProducts = this.homeService.getFeaturedProducts();
  }

  goToStore() {
    this.navCtrl.navigateForward('/store');
  }

  joinAuction() {
    this.navCtrl.navigateForward('/auction');
  }

}
