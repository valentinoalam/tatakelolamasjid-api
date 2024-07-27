import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BankAccountCountOrderByAggregateInput } from './bank-account-count-order-by-aggregate.input';
import { BankAccountMaxOrderByAggregateInput } from './bank-account-max-order-by-aggregate.input';
import { BankAccountMinOrderByAggregateInput } from './bank-account-min-order-by-aggregate.input';

@InputType()
export class BankAccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => BankAccountCountOrderByAggregateInput, {nullable:true})
    _count?: BankAccountCountOrderByAggregateInput;

    @Field(() => BankAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: BankAccountMaxOrderByAggregateInput;

    @Field(() => BankAccountMinOrderByAggregateInput, {nullable:true})
    _min?: BankAccountMinOrderByAggregateInput;
}
