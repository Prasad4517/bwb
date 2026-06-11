import { Injectable, computed, signal } from '@angular/core';
import { MarketplaceRepository } from '../data-access/marketplace.repository';
import { Product } from '../models/product.model';

@Injectable()
export class MarketplaceFacade {
  private readonly listingsState = signal<Product[]>([]);
  private readonly searchTermState = signal('');
  private readonly selectedCategoryState = signal('');

  readonly searchTerm = this.searchTermState.asReadonly();
  readonly selectedCategory = this.selectedCategoryState.asReadonly();
  readonly listings = computed(() => {
    const query = this.searchTermState().trim().toLowerCase();
    const category = this.selectedCategoryState().toLowerCase();

    return this.listingsState().filter(product =>
      (!query || product.name.toLowerCase().includes(query)) &&
      (!category || product.category.toLowerCase() === category),
    );
  });

  constructor(private readonly repository: MarketplaceRepository) {}

  load(): void {
    this.repository.getListings().subscribe(listings => this.listingsState.set(listings));
  }

  setSearchTerm(searchTerm: string): void {
    this.searchTermState.set(searchTerm);
  }

  setCategory(category: string): void {
    this.selectedCategoryState.set(category);
  }

  clearFilters(): void {
    this.searchTermState.set('');
    this.selectedCategoryState.set('');
  }
}
