import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AssetStatusOrderByRelationAggregateInput } from '../asset-status/asset-status-order-by-relation-aggregate.input';
import { AssetTagsOrderByRelationAggregateInput } from '../asset-tags/asset-tags-order-by-relation-aggregate.input';

@InputType()
export class AssetOrderByWithRelationInput {

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

    @Field(() => AssetStatusOrderByRelationAggregateInput, {nullable:true})
    AssetStatus?: AssetStatusOrderByRelationAggregateInput;

    @Field(() => AssetTagsOrderByRelationAggregateInput, {nullable:true})
    AssetTags?: AssetTagsOrderByRelationAggregateInput;
}
