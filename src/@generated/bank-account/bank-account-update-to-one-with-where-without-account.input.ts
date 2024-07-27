import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Type } from 'class-transformer';
import { BankAccountUpdateWithoutAccountInput } from './bank-account-update-without-account.input';

@InputType()
export class BankAccountUpdateToOneWithWhereWithoutAccountInput {

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;

    @Field(() => BankAccountUpdateWithoutAccountInput, {nullable:false})
    @Type(() => BankAccountUpdateWithoutAccountInput)
    data!: BankAccountUpdateWithoutAccountInput;
}
