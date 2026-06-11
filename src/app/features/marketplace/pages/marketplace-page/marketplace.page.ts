import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteService } from '../../../favourites/services/favourite.service';
import { MarketplaceRepository } from '../../data-access/marketplace.repository';
import { MockMarketplaceRepository } from '../../data-access/mock-marketplace.repository';
import { Product } from '../../models/product.model';
import { MarketplaceFacade } from '../../services/marketplace.facade';

@Component({
  selector: 'app-marketplace-page',
  templateUrl: 'marketplace.page.html',
  styleUrls: ['marketplace.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MarketplaceFacade,
    { provide: MarketplaceRepository, useClass: MockMarketplaceRepository },
  ],
})
export class MarketplacePage implements OnInit {
  readonly listings = this.facade.listings;
  searchTerm = '';
  selectedCategory = '';

  constructor(
    private readonly facade: MarketplaceFacade,
    private readonly favouriteService: FavouriteService,
  ) {}

  ngOnInit(): void {
    this.facade.load();
  }

  updateSearchTerm(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.facade.setSearchTerm(searchTerm);
  }

  updateCategory(category: string): void {
    this.selectedCategory = category;
    this.facade.setCategory(category);
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.facade.clearFilters();
  }

  bargain(product: Product): void {
    void product;
  }

  addToFavorites(product: Product): void {
    this.favouriteService.addToFavorites(product);
  }

  buy(product: Product): void {
    void product;
  }
}
