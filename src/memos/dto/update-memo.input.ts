import { CreateMemoInput } from './create-memo.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMemoInput extends PartialType(CreateMemoInput) {
  id: number;
}
