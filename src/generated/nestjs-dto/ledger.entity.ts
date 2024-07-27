import { Period, WeekDay } from '@prisma/client';
import { TrialBalance } from './trialBalance.entity';

export class Ledger {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  reportPeriod: Period;
  startWeekDay: WeekDay;
  TrialBalance?: TrialBalance[];
}
