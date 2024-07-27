import { CreateIncomeInput } from './create-income.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateIncomeInput extends PartialType(CreateIncomeInput) {
  id: number;
}
