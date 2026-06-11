import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { NavigationItem } from '../../core/models/navigation-item.model';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NavigationMenuComponent {
  readonly profile = this.profileService.profile;
  readonly navigationItems: NavigationItem[] = [
    { label: 'Profile', icon: 'person-outline', route: '/profile' },
    { label: 'Rewards', icon: 'wallet-outline', route: '/rewards' },
    { label: 'Favourites', icon: 'heart-outline', route: '/favourites' },
    { label: "What's New", icon: 'sparkles-outline', route: '/whats-new' },
    { label: 'Contact Us', icon: 'chatbubble-ellipses-outline', route: '/contact-us' },
    { label: 'About Us', icon: 'information-circle-outline', route: '/about-us' },
  ];

  constructor(
    private readonly menuController: MenuController,
    private readonly profileService: ProfileService,
    private readonly router: Router,
  ) {}

  async navigate(route: string): Promise<void> {
    await this.menuController.close('leftMenu');
    await this.router.navigateByUrl(route);
  }
}
