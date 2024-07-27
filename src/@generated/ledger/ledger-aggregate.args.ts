import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';
import { Type } from 'class-transformer';
import { LedgerOrderByWithRelationInput } from './ledger-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LedgerWhereUniqueInput } from './ledger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LedgerCountAggregateInput } from './ledger-count-aggregate.input';
import { LedgerMinAggregateInput } from './ledger-min-aggregate.input';
import { LedgerMaxAggregateInput } from './ledger-max-aggregate.input';

@ArgsType()
export class LedgerAggregateArgs {

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;

    @Field(() => [LedgerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LedgerOrderByWithRelationInput>;

    @Field(() => LedgerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LedgerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LedgerCountAggregateInput, {nullable:true})
    _count?: LedgerCountAggregateInput;

    @Field(() => LedgerMinAggregateInput, {nullable:true})
    _min?: LedgerMinAggregateInput;

    @Field(() => LedgerMaxAggregateInput, {nullable:true})
    _max?: LedgerMaxAggregateInput;
}
