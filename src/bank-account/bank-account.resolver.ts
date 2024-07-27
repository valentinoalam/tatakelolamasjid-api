import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountInput } from './dto/create-bank-account.input';
import { UpdateBankAccountInput } from './dto/update-bank-account.input';

@Resolver('BankAccount')
export class BankAccountResolver {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Mutation('createBankAccount')
  create(@Args('createBankAccountInput') createBankAccountInput: CreateBankAccountInput) {
    return this.bankAccountService.create(createBankAccountInput);
  }

  @Query('bankAccount')
  findAll() {
    return this.bankAccountService.findAll();
  }

  @Query('bankAccount')
  findOne(@Args('id') id: number) {
    return this.bankAccountService.findOne(id);
  }

  @Mutation('updateBankAccount')
  update(@Args('updateBankAccountInput') updateBankAccountInput: UpdateBankAccountInput) {
    return this.bankAccountService.update(updateBankAccountInput.id, updateBankAccountInput);
  }

  @Mutation('removeBankAccount')
  remove(@Args('id') id: number) {
    return this.bankAccountService.remove(id);
  }
}
