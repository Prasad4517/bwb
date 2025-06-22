import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsnewService {

    constructor() { }

  getUpdates(): Observable<any[]> {
    // Replace with HTTP call when API is ready
    // return this.http.get<any[]>('https://yourapi.com/whatsnew');

    return of([
      {
        title: 'Live Auctions Launched!',
        description: 'Participate in real-time auctions and place instant bids.',
        date: '2025-06-17'
      },
      {
        title: 'Bargain Chat Feature',
        description: 'Negotiate directly with sellers via our new bargain chat.',
        date: '2025-06-15'
      },
      {
        title: 'Performance Boost',
        description: 'Optimized loading time and improved product search filters.',
        date: '2025-06-12'
      }
    ]);
  }
}
