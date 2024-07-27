import { CreateLedgerInput } from './create-ledger.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLedgerInput extends PartialType(CreateLedgerInput) {
  id: number;
}
