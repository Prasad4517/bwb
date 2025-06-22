import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WhatsnewService } from 'src/app/Services/whatsnew.service';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule,FormsModule],
})
export class WhatsNewComponent implements OnInit {
  updates: any[] = [];

  constructor(
    private whatsNewService: WhatsnewService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchUpdates();
  }

  fetchUpdates() {
    this.whatsNewService.getUpdates().subscribe(
      (data) => {
        this.updates = data;
      },
      (error) => {
        console.error('Error fetching updates:', error);
      }
    );
  }
  goBackToStore() {
    this.router.navigate(['/store']);
  }
}
