import { AccountType } from '@prisma/client';
import { BankAccount } from './bankAccount.entity';
import { Transaction } from './transaction.entity';
import { TrialBalanceDetail } from './trialBalanceDetail.entity';

export class Account {
  id: string;
  bankAccId: string | null;
  parentAccountId: string | null;
  name: string;
  type: AccountType;
  description: string;
  balance: number;
  bankAcc?: BankAccount | null;
  createdAt: Date;
  updatedAt: Date | null;
  parent?: Account | null;
  children?: Account[];
  Transaction?: Transaction[];
  TrialBalanceDetail?: TrialBalanceDetail[];
}
