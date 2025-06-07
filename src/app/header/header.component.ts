import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonicModule]
})
export class HeaderComponent  implements OnInit {
  constructor(private menuControl:MenuController) { }

  ngOnInit() {}
  openNotifications(){
    this.menuControl.open('notificationsMenu');
  }
}
