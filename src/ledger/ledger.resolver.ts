import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LedgerService } from './ledger.service';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';

@Resolver('Ledger')
export class LedgerResolver {
  constructor(private readonly ledgerService: LedgerService) {}

  @Mutation('createLedger')
  create(@Args('createLedgerInput') createLedgerInput: CreateLedgerInput) {
    return this.ledgerService.create(createLedgerInput);
  }

  @Query('ledger')
  findAll() {
    return this.ledgerService.findAll();
  }

  @Query('ledger')
  findOne(@Args('id') id: number) {
    return this.ledgerService.findOne(id);
  }

  @Mutation('updateLedger')
  update(@Args('updateLedgerInput') updateLedgerInput: UpdateLedgerInput) {
    return this.ledgerService.update(updateLedgerInput.id, updateLedgerInput);
  }

  @Mutation('removeLedger')
  remove(@Args('id') id: number) {
    return this.ledgerService.remove(id);
  }
}
