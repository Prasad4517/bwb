import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FavouriteService } from '../../services/favourite.service';
import { Product } from '../../../marketplace/models/product.model';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class FavouritesPage implements OnInit {
  favoriteProducts: Product[] = [];

  constructor(
    private router: Router,
    private favoriteService: FavouriteService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteProducts = this.favoriteService.getFavorites();
  }

  goBackToStore() {
    this.router.navigate(['/marketplace']);
  }

  async removeFromFavorites(productId: number) {
    this.favoriteService.removeFromFavorites(productId);
    this.loadFavorites();

    const toast = await this.toastController.create({
      message: 'Product removed from favorites.',
      duration: 1500,
      color: 'danger',
      position: 'top'
    });
    await toast.present();
  }
}
