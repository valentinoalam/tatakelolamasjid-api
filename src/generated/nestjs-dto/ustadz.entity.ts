import { UstadzEvent } from './ustadzEvent.entity';

export class Ustadz {
  id: string;
  name: string;
  phone: string;
  address: string;
  attendAs?: UstadzEvent[];
}
