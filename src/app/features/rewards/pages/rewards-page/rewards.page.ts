import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { ReferralService } from '../../services/referral.service';

@Component({
  selector: 'app-rewards-page',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RewardsPage implements OnInit {
  creditAmount = 500;

  referralCode = '';
  constructor(
    private toastController: ToastController,
    private referralService: ReferralService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getReferralCode();
  }

  getReferralCode() {
    this.referralService.getReferralCode().subscribe({
      next: (code) => {
        this.referralCode = code;
      },
      error: () => {
        this.presentToast('Unable to fetch referral code.');
      }
    });
  }

  async copyReferralCode() {
    try {
      await navigator.clipboard.writeText(this.referralCode);
      this.presentToast('Referral code copied to clipboard!');
    } catch (err) {
      this.presentToast('Failed to copy code. Try manually.');
    }
  }

  async shareNow() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join and Earn!',
          text: `Use my referral code ${this.referralCode} to sign up and get your bonus!`,
          url: 'https://yourappurl.com'
        });
        this.referralService.trackShareEvent().subscribe();
      } catch (error) {
        this.presentToast('Sharing cancelled.');
      }
    } else {
      this.presentToast('Sharing not supported on this device.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    await toast.present();
  }

  goBackToStore() {
    this.router.navigate(['/marketplace']);
  }
}
