import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountCreateInput } from './bank-account-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBankAccountArgs {

    @Field(() => BankAccountCreateInput, {nullable:false})
    @Type(() => BankAccountCreateInput)
    data!: BankAccountCreateInput;
}
