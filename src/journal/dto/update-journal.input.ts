import { CreateJournalInput } from './create-journal.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateJournalInput extends PartialType(CreateJournalInput) {
  id: number;
}
