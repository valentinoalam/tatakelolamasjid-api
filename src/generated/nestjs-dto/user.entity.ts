import { Role } from '@prisma/client';
import { UserNotification } from './userNotification.entity';
import { PaymentMethod } from './paymentMethod.entity';
import { Memo } from './memo.entity';
import { Profile } from './profile.entity';
import { Position } from './position.entity';
import { Participant } from './participant.entity';

export class User {
  id: string;
  emailAddress: string;
  username: string;
  hashedPassword: string;
  api_token: string | null;
  isConfirmed: string;
  createdAt: Date;
  updatedAt: Date | null;
  role: Role;
  notification?: UserNotification[];
  paymentMethod?: PaymentMethod[];
  memo?: Memo[];
  profile?: Profile | null;
  position?: Position | null;
  Participant?: Participant[];
}
