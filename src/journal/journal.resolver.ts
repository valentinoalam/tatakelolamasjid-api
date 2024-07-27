import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JournalService } from './journal.service';
import { CreateJournalInput } from './dto/create-journal.input';
import { UpdateJournalInput } from './dto/update-journal.input';

@Resolver('Journal')
export class JournalResolver {
  constructor(private readonly journalService: JournalService) {}

  @Mutation('createJournal')
  create(@Args('createJournalInput') createJournalInput: CreateJournalInput) {
    return this.journalService.create(createJournalInput);
  }

  @Query('journal')
  findAll() {
    return this.journalService.findAll();
  }

  @Query('journal')
  findOne(@Args('id') id: number) {
    return this.journalService.findOne(id);
  }

  @Mutation('updateJournal')
  update(@Args('updateJournalInput') updateJournalInput: UpdateJournalInput) {
    return this.journalService.update(updateJournalInput.id, updateJournalInput);
  }

  @Mutation('removeJournal')
  remove(@Args('id') id: number) {
    return this.journalService.remove(id);
  }
}
