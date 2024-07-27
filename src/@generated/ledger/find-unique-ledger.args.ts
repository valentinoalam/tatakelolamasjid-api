import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLedgerArgs {

    @Field(() => LedgerWhereUniqueInput, {nullable:false})
    @Type(() => LedgerWhereUniqueInput)
    where!: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;
}
