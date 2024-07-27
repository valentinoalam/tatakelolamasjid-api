import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';

@Resolver('Expense')
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Mutation('createExpense')
  create(@Args('createExpenseInput') createExpenseInput: CreateExpenseInput) {
    return this.expensesService.create(createExpenseInput);
  }

  @Query('expenses')
  findAll() {
    return this.expensesService.findAll();
  }

  @Query('expense')
  findOne(@Args('id') id: number) {
    return this.expensesService.findOne(id);
  }

  @Mutation('updateExpense')
  update(@Args('updateExpenseInput') updateExpenseInput: UpdateExpenseInput) {
    return this.expensesService.update(updateExpenseInput.id, updateExpenseInput);
  }

  @Mutation('removeExpense')
  remove(@Args('id') id: number) {
    return this.expensesService.remove(id);
  }
}
