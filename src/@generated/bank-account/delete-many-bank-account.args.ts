import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBankAccountArgs {

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;
}
