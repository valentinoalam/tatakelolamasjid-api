import { NotificationStatus } from '@prisma/client';
import { UserNotification } from './userNotification.entity';

export class Notification {
  id: string;
  sender: string | null;
  title: string;
  message: string;
  photoUrl: string | null;
  dtCreated: Date;
  isReaded: boolean;
  receiver?: UserNotification[];
  sentAt: Date;
  status: NotificationStatus;
}
