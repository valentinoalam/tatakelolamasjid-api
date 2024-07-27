import { Injectable } from '@nestjs/common';
import { CreateJournalEntryInput } from './dto/create-journal-entry.input';
import { UpdateJournalEntryInput } from './dto/update-journal-entry.input';

@Injectable()
export class JournalEntryService {
  create(createJournalEntryInput: CreateJournalEntryInput) {
    return 'This action adds a new journalEntry';
  }

  findAll() {
    return `This action returns all journalEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} journalEntry`;
  }

  update(id: number, updateJournalEntryInput: UpdateJournalEntryInput) {
    return `This action updates a #${id} journalEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} journalEntry`;
  }
}
