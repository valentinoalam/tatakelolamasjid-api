import { Ustadz } from './ustadz.entity';
import { Event } from './event.entity';

export class UstadzEvent {
  id: string;
  ustadzId: string;
  eventId: string;
  Ustadz?: Ustadz;
  Event?: Event;
}
