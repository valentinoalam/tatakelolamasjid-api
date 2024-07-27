import { Account } from './account.entity';
import { TrialBalance } from './trialBalance.entity';

export class TrialBalanceDetail {
  id: string;
  trialBalanceId: string;
  accountId: string;
  isDebit: boolean;
  openingBalance: number;
  closingBalance: number;
  account?: Account;
  trialBalance?: TrialBalance;
  createdAt: Date;
  updatedAt: Date | null;
}
