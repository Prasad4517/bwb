import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileComponent implements OnInit {

  editMode: boolean = false;
  profileImage: string | null = null;

  name: string = 'Prasad Waghamare';
  email: string = 'prasadwaghamare2002@example.com';
  mobile: string = '+91-9876543210';
  address: string = 'Flat No. 12, Green Park Society, Pune, Maharashtra, India - 411038';
  totalOrders: number = 15;
  ordersDelivered: number = 13;

  constructor(
    private router: Router,
    private userService: UserserviceService,
    private appComponent: AppComponent,
    private menu: MenuController
  ) {
    console.log('ProfileComponent constructor called');
    
  }

  ngOnInit(): void {
    console.log('ProfileComponent initialized');
  }

  backToMenu() {
    this.router.navigate(['/menu']);
  }

  saveProfile() {
    console.log('Profile saved!', {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
    });
  }

  updateProfileImage() {
    console.log("Clicked!");
    this.userService.openPhotoOptions();
    this.profileImage = this.userService.profileImage;
  }

  toggleEdit() {
    if (this.editMode) {
      this.saveProfile();
    }
    this.editMode = !this.editMode;
  }

  logout() {
    console.log('Logged out');
  }

  goBackToStore(){
    // this.menu.open('leftMenu');
    this.router.navigate(['/store']);
  }
}


// backToMenu() {
  //   this.navCtrl.navigateRoot('/'); // Navigate to main screen
  //   setTimeout(() => {
  //     this.menuCtrl.open('leftMenu'); // Open left side menu after navigation
  //   }, 300); // Delay to allow navigation to complete
  // }