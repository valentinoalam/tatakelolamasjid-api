import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AssetTagsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tagId?: keyof typeof SortOrder;
}
