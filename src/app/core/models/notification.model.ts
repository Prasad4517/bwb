export type NotificationType = 'order' | 'offer' | 'account' | 'system';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
  type: NotificationType;
  route?: string;
  read: boolean;
}
