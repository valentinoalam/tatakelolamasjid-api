import { Module } from '@nestjs/common';
import { LedgerService } from './ledger.service';
import { LedgerResolver } from './ledger.resolver';

@Module({
  providers: [LedgerResolver, LedgerService],
})
export class LedgerModule {}
