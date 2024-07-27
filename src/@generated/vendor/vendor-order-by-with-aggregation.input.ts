import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VendorCountOrderByAggregateInput } from './vendor-count-order-by-aggregate.input';
import { VendorMaxOrderByAggregateInput } from './vendor-max-order-by-aggregate.input';
import { VendorMinOrderByAggregateInput } from './vendor-min-order-by-aggregate.input';

@InputType()
export class VendorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    businessField?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => VendorCountOrderByAggregateInput, {nullable:true})
    _count?: VendorCountOrderByAggregateInput;

    @Field(() => VendorMaxOrderByAggregateInput, {nullable:true})
    _max?: VendorMaxOrderByAggregateInput;

    @Field(() => VendorMinOrderByAggregateInput, {nullable:true})
    _min?: VendorMinOrderByAggregateInput;
}
