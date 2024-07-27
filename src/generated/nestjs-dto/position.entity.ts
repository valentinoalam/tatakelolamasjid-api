import { User } from './user.entity';
import { Event } from './event.entity';

export class Position {
  id: string;
  userId: string;
  eventId: string | null;
  name: string;
  periode: string;
  createdAt: Date;
  updatedAt: Date | null;
  user?: User;
  event?: Event | null;
}
