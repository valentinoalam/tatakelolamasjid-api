import { Account } from './account.entity';

export class BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  createdAt: Date;
  updatedAt: Date | null;
  Account?: Account[];
}
