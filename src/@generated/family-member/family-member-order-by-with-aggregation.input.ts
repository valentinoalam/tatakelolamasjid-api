import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FamilyMemberCountOrderByAggregateInput } from './family-member-count-order-by-aggregate.input';
import { FamilyMemberMaxOrderByAggregateInput } from './family-member-max-order-by-aggregate.input';
import { FamilyMemberMinOrderByAggregateInput } from './family-member-min-order-by-aggregate.input';

@InputType()
export class FamilyMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    information?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relationType?: keyof typeof SortOrder;

    @Field(() => FamilyMemberCountOrderByAggregateInput, {nullable:true})
    _count?: FamilyMemberCountOrderByAggregateInput;

    @Field(() => FamilyMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: FamilyMemberMaxOrderByAggregateInput;

    @Field(() => FamilyMemberMinOrderByAggregateInput, {nullable:true})
    _min?: FamilyMemberMinOrderByAggregateInput;
}
