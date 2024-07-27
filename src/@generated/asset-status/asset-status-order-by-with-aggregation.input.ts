import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssetStatusCountOrderByAggregateInput } from './asset-status-count-order-by-aggregate.input';
import { AssetStatusAvgOrderByAggregateInput } from './asset-status-avg-order-by-aggregate.input';
import { AssetStatusMaxOrderByAggregateInput } from './asset-status-max-order-by-aggregate.input';
import { AssetStatusMinOrderByAggregateInput } from './asset-status-min-order-by-aggregate.input';
import { AssetStatusSumOrderByAggregateInput } from './asset-status-sum-order-by-aggregate.input';

@InputType()
export class AssetStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    availableQty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalQty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => AssetStatusCountOrderByAggregateInput, {nullable:true})
    _count?: AssetStatusCountOrderByAggregateInput;

    @Field(() => AssetStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: AssetStatusAvgOrderByAggregateInput;

    @Field(() => AssetStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: AssetStatusMaxOrderByAggregateInput;

    @Field(() => AssetStatusMinOrderByAggregateInput, {nullable:true})
    _min?: AssetStatusMinOrderByAggregateInput;

    @Field(() => AssetStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: AssetStatusSumOrderByAggregateInput;
}
