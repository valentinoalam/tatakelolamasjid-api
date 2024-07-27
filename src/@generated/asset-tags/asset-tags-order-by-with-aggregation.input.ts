import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssetTagsCountOrderByAggregateInput } from './asset-tags-count-order-by-aggregate.input';
import { AssetTagsMaxOrderByAggregateInput } from './asset-tags-max-order-by-aggregate.input';
import { AssetTagsMinOrderByAggregateInput } from './asset-tags-min-order-by-aggregate.input';

@InputType()
export class AssetTagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tagId?: keyof typeof SortOrder;

    @Field(() => AssetTagsCountOrderByAggregateInput, {nullable:true})
    _count?: AssetTagsCountOrderByAggregateInput;

    @Field(() => AssetTagsMaxOrderByAggregateInput, {nullable:true})
    _max?: AssetTagsMaxOrderByAggregateInput;

    @Field(() => AssetTagsMinOrderByAggregateInput, {nullable:true})
    _min?: AssetTagsMinOrderByAggregateInput;
}
