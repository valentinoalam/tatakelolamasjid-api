import { Participant } from './participant.entity';

export class EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationType: string;
  createdAt: Date;
  updatedAt: Date | null;
  Participant?: Participant[];
}
