import { Component } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { UserserviceService } from './userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  profileImage: string | null = null;
  Image: Photo | null = null;

  constructor(
    private userService: UserserviceService,
    private actionSheetCtrl: ActionSheetController,
    private menu: MenuController,
    private router: Router
  ) {
    // this.loadProfileImage();
  }

  // async loadProfileImage() {
  //   const { value } = await Preferences.get({ key: 'profileImage' });
  //   this.profileImage = value;
  // }

  async openPhotoOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Profile Picture',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => this.takePhoto(CameraSource.Camera),
        },
        {
          text: 'Choose from Gallery',
          icon: 'image',
          handler: () => this.takePhoto(CameraSource.Photos),
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  updateProfileImage() {
    console.log('Clicked!');
    this.openPhotoOptions();
  }

  async takePhoto(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: source,
      });

      if (image.webPath) {
        this.profileImage = image.webPath;
        await Preferences.set({ key: 'profileImage', value: image.webPath });
      }
    } catch (error) {
      console.log('Error taking photo', error);
    }
  }

  async navigateAndClose(menuId: string, route: string) {
    await this.menu.close(menuId);
    this.router.navigate([route]);
  }
}
