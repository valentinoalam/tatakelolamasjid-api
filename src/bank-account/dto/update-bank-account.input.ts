import { CreateBankAccountInput } from './create-bank-account.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBankAccountInput extends PartialType(CreateBankAccountInput) {
  id: number;
}
