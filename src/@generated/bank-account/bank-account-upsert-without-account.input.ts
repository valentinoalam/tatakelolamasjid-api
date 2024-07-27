import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankAccountUpdateWithoutAccountInput } from './bank-account-update-without-account.input';
import { Type } from 'class-transformer';
import { BankAccountCreateWithoutAccountInput } from './bank-account-create-without-account.input';
import { BankAccountWhereInput } from './bank-account-where.input';

@InputType()
export class BankAccountUpsertWithoutAccountInput {

    @Field(() => BankAccountUpdateWithoutAccountInput, {nullable:false})
    @Type(() => BankAccountUpdateWithoutAccountInput)
    update!: BankAccountUpdateWithoutAccountInput;

    @Field(() => BankAccountCreateWithoutAccountInput, {nullable:false})
    @Type(() => BankAccountCreateWithoutAccountInput)
    create!: BankAccountCreateWithoutAccountInput;

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;
}
