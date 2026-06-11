import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NotificationService } from './core/services/notification.service';
import { ProfileService } from './core/services/profile.service';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { NavigationMenuComponent } from './layout/side-menu/navigation-menu.component';
import { NotificationMenuComponent } from './layout/notification-menu/notification-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppHeaderComponent,
    NavigationMenuComponent,
    NotificationMenuComponent,
  ],
})
export class AppComponent implements OnInit {
  readonly showAppHeader = signal(true);
  readonly headerTitle = signal('BWB');
  readonly unreadCount = this.notificationService.unreadCount;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly profileService: ProfileService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    void this.profileService.initialize();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateHeaderFromRoute(this.router.routerState.snapshot.root));

    this.updateHeaderFromRoute(this.router.routerState.snapshot.root);
  }

  private updateHeaderFromRoute(root: ActivatedRouteSnapshot): void {
    let route = root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    this.showAppHeader.set(route.data['showAppHeader'] !== false);
    this.headerTitle.set(route.data['headerTitle'] ?? 'BWB');
  }
}
