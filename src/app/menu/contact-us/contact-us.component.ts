import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  standalone:true,
  imports: [IonicModule,CommonModule,FormsModule],
})
export class ContactUSComponent    {

  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private alertController: AlertController,
    private menu: MenuController,
    private router :Router
  ) {}

  async submitContactForm() {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      const alert = await this.alertController.create({
        header: 'Missing Details',
        message: 'Please fill out your name, email, and message.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const successAlert = await this.alertController.create({
      header: 'Thank you!',
      message: 'Your message has been sent successfully.',
      buttons: ['OK']
    });
    await successAlert.present();

    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
   goBackToStore(){
    // this.menu.open('leftMenu');
    this.router.navigate(['/store']);
  }
}
