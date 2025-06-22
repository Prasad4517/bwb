import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FavouriteService } from 'src/app/Services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class FavouriteComponent implements OnInit {
  favoriteProducts: any[] = [];

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
    this.router.navigate(['/store']);
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
