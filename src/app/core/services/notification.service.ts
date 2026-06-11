import { Injectable, computed, signal } from '@angular/core';
import { AppNotification } from '../models/notification.model';

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'order-shipped',
    title: 'Order shipped',
    message: 'Your recent order is on its way.',
    createdAt: new Date(Date.now() - 18 * 60 * 1000),
    type: 'order',
    route: '/orders',
    read: false,
  },
  {
    id: 'new-offer',
    title: 'New offer available',
    message: 'A seller sent you a new bargain offer.',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    type: 'offer',
    route: '/home',
    read: false,
  },
  {
    id: 'profile-reminder',
    title: 'Complete your profile',
    message: 'Keep your contact details current for smoother deliveries.',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    type: 'account',
    route: '/profile',
    read: true,
  },
];

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly notificationsState = signal<AppNotification[]>(INITIAL_NOTIFICATIONS);

  readonly notifications = this.notificationsState.asReadonly();
  readonly unreadCount = computed(
    () => this.notificationsState().filter(notification => !notification.read).length,
  );

  markAsRead(id: string): void {
    this.notificationsState.update(notifications =>
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

  markAllAsRead(): void {
    this.notificationsState.update(notifications =>
      notifications.map(notification => ({ ...notification, read: true })),
    );
  }
}
