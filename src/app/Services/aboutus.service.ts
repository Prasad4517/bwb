import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

 constructor() { }

  getAboutUsInfo(): Observable<any> {
    // Replace with HTTP call when API is ready
    // return this.http.get<any>('https://yourapi.com/aboutus');

    return of({
      title: 'About Buy With Bargaining',
      description: 'Buy With Bargaining is an innovative online auction platform where buyers can directly negotiate prices with sellers in real-time. Our goal is to make online shopping interactive, transparent, and fair for everyone.',
      vision: 'To revolutionize the e-commerce space by empowering buyers with negotiation power and promoting fair business practices.',
      mission: 'To connect millions of buyers and sellers worldwide on a single interactive platform that blends the excitement of live auctions with real-time price negotiations.'
    });
  }}
