import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';
import { Type } from 'class-transformer';
import { LedgerOrderByWithAggregationInput } from './ledger-order-by-with-aggregation.input';
import { LedgerScalarFieldEnum } from './ledger-scalar-field.enum';
import { LedgerScalarWhereWithAggregatesInput } from './ledger-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LedgerCountAggregateInput } from './ledger-count-aggregate.input';
import { LedgerMinAggregateInput } from './ledger-min-aggregate.input';
import { LedgerMaxAggregateInput } from './ledger-max-aggregate.input';

@ArgsType()
export class LedgerGroupByArgs {

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;

    @Field(() => [LedgerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LedgerOrderByWithAggregationInput>;

    @Field(() => [LedgerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LedgerScalarFieldEnum>;

    @Field(() => LedgerScalarWhereWithAggregatesInput, {nullable:true})
    having?: LedgerScalarWhereWithAggregatesInput;

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
