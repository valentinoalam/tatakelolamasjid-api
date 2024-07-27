import { User } from './user.entity';
import { Participant } from './participant.entity';

export class Profile {
  id: string;
  userId: string;
  dtBirth: Date;
  isMan: boolean;
  address: string;
  domisili: string | null;
  fullname: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date | null;
  user?: User;
  Participant?: Participant[];
}
