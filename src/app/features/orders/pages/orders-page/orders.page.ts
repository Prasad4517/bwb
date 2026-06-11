import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
  standalone: true,
  imports:[IonicModule,CommonModule,RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdersPage {}
