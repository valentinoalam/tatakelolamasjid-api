import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBankAccountOrThrowArgs {

    @Field(() => BankAccountWhereUniqueInput, {nullable:false})
    @Type(() => BankAccountWhereUniqueInput)
    where!: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
