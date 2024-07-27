
import {AccountType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateAccountDto {
  name: string;
@ApiProperty({ enum: AccountType})
type: AccountType;
description: string;
balance: number;
}
