import { TransactionType } from '@prisma/client';
import { Account } from './account.entity';
import { Vendor } from './vendor.entity';
import { PaymentMethod } from './paymentMethod.entity';

export class Transaction {
  id: string;
  accountId: string;
  vendorId: string;
  paymentMethodId: string;
  type: TransactionType;
  amount: number;
  description: string;
  reference: string;
  dtTrx: Date;
  notaUrl: string;
  account?: Account;
  vendor?: Vendor;
  paymentMethod?: PaymentMethod;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: string;
  updatedBy: string;
}
