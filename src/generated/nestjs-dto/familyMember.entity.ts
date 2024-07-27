import { Participant } from './participant.entity';

export class FamilyMember {
  id: string;
  participantId: string;
  name: string;
  information: string;
  relationType: string;
  guardian?: Participant;
}
