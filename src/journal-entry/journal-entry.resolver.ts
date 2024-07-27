import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JournalEntryService } from './journal-entry.service';
import { CreateJournalEntryInput } from './dto/create-journal-entry.input';
import { UpdateJournalEntryInput } from './dto/update-journal-entry.input';

@Resolver('JournalEntry')
export class JournalEntryResolver {
  constructor(private readonly journalEntryService: JournalEntryService) {}

  @Mutation('createJournalEntry')
  create(@Args('createJournalEntryInput') createJournalEntryInput: CreateJournalEntryInput) {
    return this.journalEntryService.create(createJournalEntryInput);
  }

  @Query('journalEntry')
  findAll() {
    return this.journalEntryService.findAll();
  }

  @Query('journalEntry')
  findOne(@Args('id') id: number) {
    return this.journalEntryService.findOne(id);
  }

  @Mutation('updateJournalEntry')
  update(@Args('updateJournalEntryInput') updateJournalEntryInput: UpdateJournalEntryInput) {
    return this.journalEntryService.update(updateJournalEntryInput.id, updateJournalEntryInput);
  }

  @Mutation('removeJournalEntry')
  remove(@Args('id') id: number) {
    return this.journalEntryService.remove(id);
  }
}
