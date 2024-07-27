import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountCreateManyInput } from './bank-account-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBankAccountArgs {

    @Field(() => [BankAccountCreateManyInput], {nullable:false})
    @Type(() => BankAccountCreateManyInput)
    data!: Array<BankAccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
