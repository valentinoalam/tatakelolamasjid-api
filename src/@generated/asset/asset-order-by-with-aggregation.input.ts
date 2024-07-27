import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssetCountOrderByAggregateInput } from './asset-count-order-by-aggregate.input';
import { AssetAvgOrderByAggregateInput } from './asset-avg-order-by-aggregate.input';
import { AssetMaxOrderByAggregateInput } from './asset-max-order-by-aggregate.input';
import { AssetMinOrderByAggregateInput } from './asset-min-order-by-aggregate.input';
import { AssetSumOrderByAggregateInput } from './asset-sum-order-by-aggregate.input';

@InputType()
export class AssetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_acquired?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    economicLife?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    editedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    origin?: keyof typeof SortOrder;

    @Field(() => AssetCountOrderByAggregateInput, {nullable:true})
    _count?: AssetCountOrderByAggregateInput;

    @Field(() => AssetAvgOrderByAggregateInput, {nullable:true})
    _avg?: AssetAvgOrderByAggregateInput;

    @Field(() => AssetMaxOrderByAggregateInput, {nullable:true})
    _max?: AssetMaxOrderByAggregateInput;

    @Field(() => AssetMinOrderByAggregateInput, {nullable:true})
    _min?: AssetMinOrderByAggregateInput;

    @Field(() => AssetSumOrderByAggregateInput, {nullable:true})
    _sum?: AssetSumOrderByAggregateInput;
}
