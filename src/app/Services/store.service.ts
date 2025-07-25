import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getProducts(): Observable<any[]> {
    // Replace this with API call when ready
    // return this.http.get<any[]>('https://yourapi.com/products');

return of([
  // Bikes
  { id: 1, name: 'Honda Activa 6G', price: 75000, category: 'Bikes', image: 'assets/photos/activa-6g.jpg', datePosted: '2025-06-14' },
  { id: 2, name: 'Royal Enfield Classic 350', price: 195000, category: 'Bikes', image: 'assets/photos/royalenfild.jpg', datePosted: '2025-06-13' },
  { id: 3, name: 'Yamaha R15 V4', price: 189000, category: 'Bikes', image: 'assets/trishul.jpg', datePosted: '2025-06-12' },

  // Properties
  { id: 4, name: '2 BHK Flat in Pune', price: 4500000, category: 'Properties', image: 'assets/photos/2bhkflat.jpg', datePosted: '2025-06-11' },
  { id: 5, name: 'Plot for Sale - Nashik', price: 1500000, category: 'Properties', image: 'assets/photos/plotpune.jpg', datePosted: '2025-06-10' },
  { id: 6, name: 'Commercial Office Space', price: 9500000, category: 'Properties', image: 'assets/photos/commercialoffice.jpg', datePosted: '2025-06-09' },

  // Electronics & Appliances
  { id: 7, name: 'Samsung Smart LED TV 55"', price: 67999, category: 'Electronics & Appliances', image: 'assets/photos/samsungledtv.jpg', datePosted: '2025-06-08' },
  { id: 8, name: 'LG Double Door Refrigerator', price: 28000, category: 'Electronics & Appliances', image: 'assets/photos/lgdoubledoor.jpg', datePosted: '2025-06-07' },
  { id: 9, name: 'IFB Washing Machine', price: 25000, category: 'Electronics & Appliances', image: 'assets/photos/washinmachine.jpg', datePosted: '2025-06-06' },

  // Mobiles
  { id: 10, name: 'iPhone 14 Pro Max', price: 129999, category: 'Mobiles', image: 'assets/photos/iphone14.jpg', datePosted: '2025-06-05' },
  { id: 11, name: 'Samsung Galaxy S23 Ultra', price: 114999, category: 'Mobiles', image: 'assets/photos/samsunggalaxy.jpg', datePosted: '2025-06-04' },
  { id: 12, name: 'OnePlus 12R', price: 45999, category: 'Mobiles', image: 'assets/photos/oneplus12R.jpg', datePosted: '2025-06-03' },

  // Commercial Vehicles & Spares
  { id: 13, name: 'Tata Ace Gold', price: 435000, category: 'Commercial Vehicles & Spares', image: 'assets/photos/tataace.jpg', datePosted: '2025-06-02' },
  { id: 14, name: 'Mahindra Bolero Pickup', price: 750000, category: 'Commercial Vehicles & Spares', image: 'assets/photos/mahindrabolero.jpg', datePosted: '2025-06-01' },
  { id: 15, name: 'Truck Tyres Set', price: 32000, category: 'Commercial Vehicles & Spares', image: 'assets/photos/trucktyre.jpg', datePosted: '2025-05-31' },

  // // Jobs
  // { id: 16, name: 'Software Developer - Pune', price: 0, category: 'Jobs', image: 'assets/images/job1.jpg', datePosted: '2025-05-30' },
  // { id: 17, name: 'Digital Marketing Executive', price: 0, category: 'Jobs', image: 'assets/images/job2.jpg', datePosted: '2025-05-29' },
  // { id: 18, name: 'Sales Executive - Mumbai', price: 0, category: 'Jobs', image: 'assets/images/job3.jpg', datePosted: '2025-05-28' },

  // Furniture
  { id: 19, name: 'Dining Table Set', price: 15999, category: 'Furniture', image: 'assets/photos/dinningset.jpg', datePosted: '2025-05-27' },
  { id: 20, name: 'Queen Size Bed', price: 22000, category: 'Furniture', image: 'assets/photos/queensizebed.jpg', datePosted: '2025-05-26' },
  { id: 21, name: 'Office Chair', price: 4500, category: 'Furniture', image: 'assets/photos/officechair.jpg', datePosted: '2025-05-25' },

  // Fashion
  { id: 22, name: 'Reebok Men’s Running Shoes', price: 2999, category: 'Fashion', image: 'assets/photos/shoes.jpg', datePosted: '2025-05-24' },
  { id: 23, name: 'Women’s Designer Handbag', price: 3499, category: 'Fashion', image: 'assets/photos/handbag.jpg', datePosted: '2025-05-23' },
  { id: 24, name: 'Ray-Ban Sunglasses', price: 5999, category: 'Fashion', image: 'assets/photos/sunglasses.jpg', datePosted: '2025-05-22' },

  // Pets
  { id: 25, name: 'Labrador Puppy', price: 15000, category: 'Pets', image: 'assets/photos/labrador.jpeg', datePosted: '2025-05-21' },
  { id: 26, name: 'Persian Kitten', price: 12000, category: 'Pets', image: 'assets/photos/persiankitten.jpg', datePosted: '2025-05-20' },
  { id: 27, name: 'Bird Cage', price: 4500, category: 'Pets', image: 'assets/photos/Birdcage.jpg', datePosted: '2025-05-19' },

  // Books, Sports & Hobbies
  { id: 28, name: 'Harry Potter Book Set', price: 2999, category: 'Books, Sports & Hobbies', image: 'assets/photos/harrypotter.jpeg', datePosted: '2025-05-18' },
  { id: 29, name: 'Cricket Bat', price: 2500, category: 'Books, Sports & Hobbies', image: 'assets/photos/cricketbat.jpeg', datePosted: '2025-05-17' },
  { id: 30, name: 'Acoustic Guitar', price: 7500, category: 'Books, Sports & Hobbies', image: 'assets/photos/AcousticGuitar.jpeg', datePosted: '2025-05-16' },

  // Tours & Travel
  { id: 31, name: 'Goa Holiday Package', price: 15000, category: 'Tours & Travel', image: 'assets/photos/goaholiday.jpeg', datePosted: '2025-05-15' },
  { id: 32, name: 'Kashmir Tour Package', price: 25000, category: 'Tours & Travel', image: 'assets/photos/kashmirtour.jpeg', datePosted: '2025-05-14' },
  { id: 33, name: 'Thailand Honeymoon Package', price: 45000, category: 'Tours & Travel', image: 'assets/photos/Thailandhoneymoon.jpeg', datePosted: '2025-05-13' },
]);


  }
}
