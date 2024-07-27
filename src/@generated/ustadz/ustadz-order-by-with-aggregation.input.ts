import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UstadzCountOrderByAggregateInput } from './ustadz-count-order-by-aggregate.input';
import { UstadzMaxOrderByAggregateInput } from './ustadz-max-order-by-aggregate.input';
import { UstadzMinOrderByAggregateInput } from './ustadz-min-order-by-aggregate.input';

@InputType()
export class UstadzOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => UstadzCountOrderByAggregateInput, {nullable:true})
    _count?: UstadzCountOrderByAggregateInput;

    @Field(() => UstadzMaxOrderByAggregateInput, {nullable:true})
    _max?: UstadzMaxOrderByAggregateInput;

    @Field(() => UstadzMinOrderByAggregateInput, {nullable:true})
    _min?: UstadzMinOrderByAggregateInput;
}
