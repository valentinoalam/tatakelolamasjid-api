import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountUpdateInput } from './bank-account-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';

@ArgsType()
export class UpdateOneBankAccountArgs {

    @Field(() => BankAccountUpdateInput, {nullable:false})
    @Type(() => BankAccountUpdateInput)
    data!: BankAccountUpdateInput;

    @Field(() => BankAccountWhereUniqueInput, {nullable:false})
    @Type(() => BankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
