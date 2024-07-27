import { User } from './user.entity';
import { Transaction } from './transaction.entity';

export class PaymentMethod {
  id: string;
  userId: string;
  jenis_pembayaran: string;
  createdAt: Date;
  updatedAt: Date | null;
  user?: User;
  Transaction?: Transaction[];
}
