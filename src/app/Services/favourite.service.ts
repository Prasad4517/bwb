import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }
   private favoriteProducts: any[] = [];

  addToFavorites(product: any) {
    if (!this.favoriteProducts.find(p => p.id === product.id)) {
      this.favoriteProducts.push(product);
    }
  }

  getFavorites() {
    return this.favoriteProducts;
  }

  removeFromFavorites(productId: number) {
    this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== productId);
  }
}
