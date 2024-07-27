import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IncomeService } from './income.service';
import { CreateIncomeInput } from './dto/create-income.input';
import { UpdateIncomeInput } from './dto/update-income.input';

@Resolver('Income')
export class IncomeResolver {
  constructor(private readonly incomeService: IncomeService) {}

  @Mutation('createIncome')
  create(@Args('createIncomeInput') createIncomeInput: CreateIncomeInput) {
    return this.incomeService.create(createIncomeInput);
  }

  @Query('income')
  findAll() {
    return this.incomeService.findAll();
  }

  @Query('income')
  findOne(@Args('id') id: number) {
    return this.incomeService.findOne(id);
  }

  @Mutation('updateIncome')
  update(@Args('updateIncomeInput') updateIncomeInput: UpdateIncomeInput) {
    return this.incomeService.update(updateIncomeInput.id, updateIncomeInput);
  }

  @Mutation('removeIncome')
  remove(@Args('id') id: number) {
    return this.incomeService.remove(id);
  }
}
