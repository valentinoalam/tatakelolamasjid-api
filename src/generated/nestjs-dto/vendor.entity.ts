import { Transaction } from './transaction.entity';

export class Vendor {
  id: string;
  name: string;
  phone: string;
  address: string;
  businessField: string;
  note: string;
  createdAt: Date;
  updatedAt: Date | null;
  transaction?: Transaction[];
}
