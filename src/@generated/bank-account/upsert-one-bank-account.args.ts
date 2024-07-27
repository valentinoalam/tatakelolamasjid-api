import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { Type } from 'class-transformer';
import { BankAccountCreateInput } from './bank-account-create.input';
import { BankAccountUpdateInput } from './bank-account-update.input';

@ArgsType()
export class UpsertOneBankAccountArgs {

    @Field(() => BankAccountWhereUniqueInput, {nullable:false})
    @Type(() => BankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;

    @Field(() => BankAccountCreateInput, {nullable:false})
    @Type(() => BankAccountCreateInput)
    create!: BankAccountCreateInput;

    @Field(() => BankAccountUpdateInput, {nullable:false})
    @Type(() => BankAccountUpdateInput)
    update!: BankAccountUpdateInput;
}
