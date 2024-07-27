import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EmergencyContactCountOrderByAggregateInput } from './emergency-contact-count-order-by-aggregate.input';
import { EmergencyContactMaxOrderByAggregateInput } from './emergency-contact-max-order-by-aggregate.input';
import { EmergencyContactMinOrderByAggregateInput } from './emergency-contact-min-order-by-aggregate.input';

@InputType()
export class EmergencyContactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relationType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => EmergencyContactCountOrderByAggregateInput, {nullable:true})
    _count?: EmergencyContactCountOrderByAggregateInput;

    @Field(() => EmergencyContactMaxOrderByAggregateInput, {nullable:true})
    _max?: EmergencyContactMaxOrderByAggregateInput;

    @Field(() => EmergencyContactMinOrderByAggregateInput, {nullable:true})
    _min?: EmergencyContactMinOrderByAggregateInput;
}
