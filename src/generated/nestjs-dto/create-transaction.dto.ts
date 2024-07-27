import { TransactionType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({ enum: TransactionType })
  type: TransactionType;
  amount: number;
  description: string;
  reference: string;
  dtTrx: Date;
  notaUrl: string;
  createdBy: string;
  updatedBy: string;
}
