import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerUpdateInput } from './ledger-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';

@ArgsType()
export class UpdateOneLedgerArgs {

    @Field(() => LedgerUpdateInput, {nullable:false})
    @Type(() => LedgerUpdateInput)
    data!: LedgerUpdateInput;

    @Field(() => LedgerWhereUniqueInput, {nullable:false})
    @Type(() => LedgerWhereUniqueInput)
    where!: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;
}
