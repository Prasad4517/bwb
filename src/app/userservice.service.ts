import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { ActionSheetController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   profileImage: string | null = null;
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(
      private actionSheetCtrl: ActionSheetController,
      private platform: Platform
    ) { }


  async openPhotoOptions() {
   const actionSheet = await this.actionSheetCtrl?.create({
     header: 'Select Profile Picture',
  cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => this.takePhoto(CameraSource.Camera)
        },
        {
          text: 'Choose from Gallery',
          icon: 'image',
          handler: () => this.takePhoto(CameraSource.Photos)
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet?.present();
  }
    updateProfileImage(){
       console.log("Clicked!");
  this.openPhotoOptions();
    }
  async takePhoto(source: CameraSource) {
    try {
      const image = await Camera?.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: source
      });

      if (image.webPath) {
        this.profileImage = image.webPath;
        await Preferences.set({ key: 'profileImage', value: image.webPath });
      }
    } catch (error) {
      console.log('Error taking photo', error);
    }
  }

}
