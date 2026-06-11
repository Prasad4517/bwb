import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = TestBed.inject(NotificationService);
  });

  it('should mark every notification as read', () => {
    service.markAllAsRead();

    expect(service.unreadCount()).toBe(0);
    expect(service.notifications().every(notification => notification.read)).toBeTrue();
  });
});
