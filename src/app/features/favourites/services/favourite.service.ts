import { Injectable } from '@angular/core';
import { Product } from '../../marketplace/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favoriteProducts: Product[] = [];

  addToFavorites(product: Product): void {
    if (!this.favoriteProducts.find(p => p.id === product.id)) {
      this.favoriteProducts.push(product);
    }
  }

  getFavorites(): Product[] {
    return [...this.favoriteProducts];
  }

  removeFromFavorites(productId: number): void {
    this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== productId);
  }
}
