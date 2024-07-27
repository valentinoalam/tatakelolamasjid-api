import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankAccountWhereInput } from './bank-account-where.input';
import { Type } from 'class-transformer';
import { BankAccountOrderByWithRelationInput } from './bank-account-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BankAccountWhereUniqueInput } from './bank-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BankAccountCountAggregateInput } from './bank-account-count-aggregate.input';
import { BankAccountMinAggregateInput } from './bank-account-min-aggregate.input';
import { BankAccountMaxAggregateInput } from './bank-account-max-aggregate.input';

@ArgsType()
export class BankAccountAggregateArgs {

    @Field(() => BankAccountWhereInput, {nullable:true})
    @Type(() => BankAccountWhereInput)
    where?: BankAccountWhereInput;

    @Field(() => [BankAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BankAccountOrderByWithRelationInput>;

    @Field(() => BankAccountWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;

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
