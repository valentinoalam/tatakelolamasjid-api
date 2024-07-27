import { Profile } from './profile.entity';
import { EmergencyContact } from './emergencyContact.entity';
import { User } from './user.entity';
import { Event } from './event.entity';
import { FamilyMember } from './familyMember.entity';

export class Participant {
  id: string;
  userId: string;
  eventId: string;
  profileId: string;
  emergencyId: string;
  withFamily: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  profile?: Profile;
  emergencyContact?: EmergencyContact;
  user?: User;
  event?: Event;
  member?: FamilyMember[];
}
