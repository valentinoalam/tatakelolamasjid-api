import { Period } from '@prisma/client';
import { Participant } from './participant.entity';
import { Position } from './position.entity';
import { UstadzEvent } from './ustadzEvent.entity';

export class Event {
  id: string;
  name: string;
  place: string;
  dtStart: Date;
  dtEnd: Date;
  quota: number;
  description: string;
  heldPeriod: Period;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: string;
  participant?: Participant[];
  crews?: Position[];
  speakers?: UstadzEvent[];
}
