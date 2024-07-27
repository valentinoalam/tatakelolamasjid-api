import { User } from './user.entity';
import { Notification } from './notification.entity';

export class UserNotification {
  id: string;
  userId: string;
  notification_id: string;
  user?: User;
  notif?: Notification;
}
