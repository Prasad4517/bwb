import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController, ToastController } from '@ionic/angular';
import { ReferalserviceService } from 'src/app/referalservice.service';

@Component({
  selector: 'app-freecash',
  templateUrl: './freecash.component.html',
  styleUrls: ['./freecash.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class FreecashComponent implements OnInit {
  CreditAmout: number = 500; // Default credit amount

  referralCode: string = '';
  constructor(
    private toastController: ToastController,
    private referralService: ReferalserviceService,
    private router: Router,
    private menu: MenuController
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

  goBackToMenu() {
    // window.history.back();
       this.menu.open('leftMenu');
  }
}
