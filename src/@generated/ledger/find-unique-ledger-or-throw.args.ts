import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLedgerOrThrowArgs {

    @Field(() => LedgerWhereUniqueInput, {nullable:false})
    @Type(() => LedgerWhereUniqueInput)
    where!: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;
}
