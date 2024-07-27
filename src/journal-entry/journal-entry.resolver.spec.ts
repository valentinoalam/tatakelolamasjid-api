import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryResolver } from './journal-entry.resolver';
import { JournalEntryService } from './journal-entry.service';

describe('JournalEntryResolver', () => {
  let resolver: JournalEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JournalEntryResolver, JournalEntryService],
    }).compile();

    resolver = module.get<JournalEntryResolver>(JournalEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
