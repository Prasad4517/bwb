import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutUsService } from '../../services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AboutUsComponent implements OnInit {
  aboutUsInfo: any;

  constructor(private aboutUsService: AboutUsService, private router: Router) {}

  ngOnInit() {
    this.loadAboutUsInfo();
  }

  loadAboutUsInfo() {
    this.aboutUsService.getAboutUsInfo().subscribe(
      (data) => {
        this.aboutUsInfo = data;
      },
      (error) => {
        console.error('Error fetching about us info:', error);
      }
    );
  }

  goBackToStore() {
    this.router.navigate(['/marketplace']);
  }
}
