import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input';
import { TrialBalanceOrderByWithRelationInput } from '../trial-balance/trial-balance-order-by-with-relation.input';

@InputType()
export class TrialBalanceDetailOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trialBalanceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDebit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    openingBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    closingBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    account?: AccountOrderByWithRelationInput;

    @Field(() => TrialBalanceOrderByWithRelationInput, {nullable:true})
    trialBalance?: TrialBalanceOrderByWithRelationInput;
}
