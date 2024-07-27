import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Type } from 'class-transformer';
import { LedgerCreateInput } from './ledger-create.input';
import { LedgerUpdateInput } from './ledger-update.input';

@ArgsType()
export class UpsertOneLedgerArgs {

    @Field(() => LedgerWhereUniqueInput, {nullable:false})
    @Type(() => LedgerWhereUniqueInput)
    where!: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;

    @Field(() => LedgerCreateInput, {nullable:false})
    @Type(() => LedgerCreateInput)
    create!: LedgerCreateInput;

    @Field(() => LedgerUpdateInput, {nullable:false})
    @Type(() => LedgerUpdateInput)
    update!: LedgerUpdateInput;
}
