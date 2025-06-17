import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, IonTab } from '@ionic/angular';

@Component({

  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports:[IonicModule,RouterModule]
})
export class TabsPage {

  constructor() {}

}