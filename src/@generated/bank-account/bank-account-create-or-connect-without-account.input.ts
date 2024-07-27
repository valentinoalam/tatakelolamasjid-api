import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { BankAccountCreateWithoutAccountInput } from './bank-account-create-without-account.input';

@InputType()
export class BankAccountCreateOrConnectWithoutAccountInput {

    @Field(() => BankAccountWhereUniqueInput, {nullable:false})
    @Type(() => BankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;

    @Field(() => BankAccountCreateWithoutAccountInput, {nullable:false})
    @Type(() => BankAccountCreateWithoutAccountInput)
    create!: BankAccountCreateWithoutAccountInput;
}
