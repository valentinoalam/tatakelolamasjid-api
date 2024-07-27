import { Ledger } from './ledger.entity';
import { TrialBalanceDetail } from './trialBalanceDetail.entity';

export class TrialBalance {
  id: string;
  ledgerId: string;
  periodStart: Date;
  periodEnd: Date;
  totalDebit: number;
  totalCredit: number;
  createdAt: Date;
  updatedAt: Date | null;
  ledger?: Ledger;
  TrialBalanceDetail?: TrialBalanceDetail[];
}
