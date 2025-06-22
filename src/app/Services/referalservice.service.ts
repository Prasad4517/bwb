import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferalserviceService {

constructor() {}

  // Get referral code from backend (now mocked)
  getReferralCode(): Observable<string> {
    // future: return this.http.get<string>('api/referral-code');
    return of('PRASAD500');
  }

  // Track share event (future API)
  trackShareEvent(): Observable<any> {
    // future: return this.http.post('api/track-share', {...});
    return of(true);
  }}
