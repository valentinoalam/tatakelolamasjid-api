import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssetOrderByWithRelationInput } from '../asset/asset-order-by-with-relation.input';
import { TagOrderByWithRelationInput } from '../tag/tag-order-by-with-relation.input';

@InputType()
export class AssetTagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tagId?: keyof typeof SortOrder;

    @Field(() => AssetOrderByWithRelationInput, {nullable:true})
    asset?: AssetOrderByWithRelationInput;

    @Field(() => TagOrderByWithRelationInput, {nullable:true})
    tag?: TagOrderByWithRelationInput;
}
