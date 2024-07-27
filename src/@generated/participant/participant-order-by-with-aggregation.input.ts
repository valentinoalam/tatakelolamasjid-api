import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ParticipantCountOrderByAggregateInput } from './participant-count-order-by-aggregate.input';
import { ParticipantMaxOrderByAggregateInput } from './participant-max-order-by-aggregate.input';
import { ParticipantMinOrderByAggregateInput } from './participant-min-order-by-aggregate.input';

@InputType()
export class ParticipantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emergencyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    withFamily?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => ParticipantCountOrderByAggregateInput, {nullable:true})
    _count?: ParticipantCountOrderByAggregateInput;

    @Field(() => ParticipantMaxOrderByAggregateInput, {nullable:true})
    _max?: ParticipantMaxOrderByAggregateInput;

    @Field(() => ParticipantMinOrderByAggregateInput, {nullable:true})
    _min?: ParticipantMinOrderByAggregateInput;
}
