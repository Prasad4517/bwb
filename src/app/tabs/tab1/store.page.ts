import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class storepage {

  constructor() {}

}
  