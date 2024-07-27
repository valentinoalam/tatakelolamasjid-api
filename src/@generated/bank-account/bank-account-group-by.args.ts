import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Type } from 'class-transformer';
import { BankAccountOrderByWithAggregationInput } from './bank-account-order-by-with-aggregation.input';
import { BankAccountScalarFieldEnum } from './bank-account-scalar-field.enum';
import { BankAccountScalarWhereWithAggregatesInput } from './bank-account-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BankAccountCountAggregateInput } from './bank-account-count-aggregate.input';
import { BankAccountMinAggregateInput } from './bank-account-min-aggregate.input';
import { BankAccountMaxAggregateInput } from './bank-account-max-aggregate.input';

@ArgsType()
export class BankAccountGroupByArgs {

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;

    @Field(() => [BankAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BankAccountOrderByWithAggregationInput>;

    @Field(() => [BankAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BankAccountScalarFieldEnum>;

    @Field(() => BankAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: BankAccountScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BankAccountCountAggregateInput, {nullable:true})
    _count?: BankAccountCountAggregateInput;

    @Field(() => BankAccountMinAggregateInput, {nullable:true})
    _min?: BankAccountMinAggregateInput;

    @Field(() => BankAccountMaxAggregateInput, {nullable:true})
    _max?: BankAccountMaxAggregateInput;
}
