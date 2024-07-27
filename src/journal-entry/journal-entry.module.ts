import { Module } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryResolver } from './journal-entry.resolver';

@Module({
  providers: [JournalEntryResolver, JournalEntryService],
})
export class JournalEntryModule {}
