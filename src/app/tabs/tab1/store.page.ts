import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavouriteService } from 'src/app/Services/favourite.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class storepage {
  products: any[] = []; // all products from API
  filteredProducts: any[] = []; // products to show after filtering
  favourites: any[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor(private storeService: StoreService,
              private router:Router,
            private favoriteService:FavouriteService, 
            ) {}

  ngOnInit() {
    this.fetchProducts();
    console.log('HI store page opened');
  }

  fetchProducts() {
    this.storeService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = data; // show all initially
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // applyFilters() {
  //   this.filteredProducts = this.products.filter(product => {
  //     console.log(this.selectedCategory);
  //     const categoryMatch = this.selectedCategory === '' || product.category.toLowerCase() === this.selectedCategory.toLowerCase();
  //     return categoryMatch ;
  //   });
  // }
  applyFilters() {
    console.log('🔍 Applying filters...');
    console.log('Selected Category:', this.selectedCategory, 'end');

    this.filteredProducts = this.products.filter((product) => {
      console.log(
        `👉 Checking Product: ${product.name} | Category: ${product.category}`
      );

      const categoryMatch =
        this.selectedCategory === '' ||
        product.category.toLowerCase() === this.selectedCategory.toLowerCase();

      if (categoryMatch) {
        console.log(`✅ Match Found for: ${product.name}`);
      } else {
        console.log(`❌ No Match for: ${product.name}`);
      }

      return categoryMatch;
    });

    console.log('📝 Filtered Products:', this.filteredProducts);
  }

  applyFiltersName() {
    console.log('🔍 Applying filters...');
    console.log('Selected Category:', this.selectedCategory, 'end');

    this.filteredProducts = this.products.filter((product) => {
      console.log(
        `👉 Checking Product: ${product.name} | Category: ${product.category}`
      );
 
      const searchTermMath =
        this.searchTerm === '' ||
        product.name.toLowerCase() === this.searchTerm.toLowerCase();

      if (searchTermMath) {
        console.log(`✅ Match Found for: ${product.name}`);
      } else {
        console.log(`❌ No Match for: ${product.name}`);
      }

      return searchTermMath;
    });

    console.log('📝 Filtered Products:', this.filteredProducts);
  }
  bargain(product: any) {
    console.log(`Bargaining for: ${product.name}`);
  }

  addToFavorites(product: any) {
    this.favoriteService.addToFavorites(product);
    console.log(`${product.name} added to favorites.`);
  }


  Buy(product: any) {

  }
}
