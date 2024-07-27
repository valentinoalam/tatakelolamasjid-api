import { CreateJournalEntryInput } from './create-journal-entry.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateJournalEntryInput extends PartialType(CreateJournalEntryInput) {
  id: number;
}
