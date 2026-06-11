import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { AppNotification, NotificationType } from '../../core/models/notification.model';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss'],
  standalone: true,
  imports: [DatePipe, IonicModule],
})
export class NotificationMenuComponent {
  readonly notifications = this.notificationService.notifications;
  readonly unreadCount = this.notificationService.unreadCount;

  constructor(
    private readonly menuController: MenuController,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
  ) {}

  markAllAsRead(): void {
    this.notificationService.markAllAsRead();
  }

  async openNotification(notification: AppNotification): Promise<void> {
    this.notificationService.markAsRead(notification.id);
    await this.menuController.close('notificationsMenu');

    if (notification.route) {
      await this.router.navigateByUrl(notification.route);
    }
  }

  iconFor(type: NotificationType): string {
    const icons: Record<NotificationType, string> = {
      account: 'person-outline',
      offer: 'pricetag-outline',
      order: 'cube-outline',
      system: 'information-circle-outline',
    };
    return icons[type];
  }
}
