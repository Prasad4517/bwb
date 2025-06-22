import { Component } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { UserserviceService } from './Services/userservice.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public  hideheaderpages=['/profile', '/freecash','/favourite', '/contactus', '/aboutus', '/whatsnew', '/helpsupport'];
  profileImage: string | null = null;
  Image: Photo | null = null;
    showAppHeader = true;


  constructor(
    private userService: UserserviceService,
    private actionSheetCtrl: ActionSheetController,
    private menu: MenuController,
    public router: Router
  ) {
    // this.loadProfileImage();
 this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // hide on /profile route
        this.showAppHeader = !event.url.includes('/profile');
      }
    });  }

  async navigateAndClose(menuId: string, route: string) {
    await this.menu.close(menuId);
    this.router.navigate([route]);
  }


}
