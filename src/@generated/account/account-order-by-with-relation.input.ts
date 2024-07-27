import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BankAccountOrderByWithRelationInput } from '../bank-account/bank-account-order-by-with-relation.input';
import { AccountOrderByRelationAggregateInput } from './account-order-by-relation-aggregate.input';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';
import { TrialBalanceDetailOrderByRelationAggregateInput } from '../trial-balance-detail/trial-balance-detail-order-by-relation-aggregate.input';

@InputType()
export class AccountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankAccId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentAccountId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => BankAccountOrderByWithRelationInput, {nullable:true})
    bankAcc?: BankAccountOrderByWithRelationInput;

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    parent?: AccountOrderByWithRelationInput;

    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    children?: AccountOrderByRelationAggregateInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    Transaction?: TransactionOrderByRelationAggregateInput;

    @Field(() => TrialBalanceDetailOrderByRelationAggregateInput, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailOrderByRelationAggregateInput;
}
