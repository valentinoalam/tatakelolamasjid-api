import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountResolver } from './bank-account.resolver';

@Module({
  providers: [BankAccountResolver, BankAccountService],
})
export class BankAccountModule {}
