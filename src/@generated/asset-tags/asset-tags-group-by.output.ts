import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssetTagsCountAggregate } from './asset-tags-count-aggregate.output';
import { AssetTagsMinAggregate } from './asset-tags-min-aggregate.output';
import { AssetTagsMaxAggregate } from './asset-tags-max-aggregate.output';

@ObjectType()
export class AssetTagsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assetId!: string;

    @Field(() => String, {nullable:false})
    tagId!: string;

    @Field(() => AssetTagsCountAggregate, {nullable:true})
    _count?: AssetTagsCountAggregate;

    @Field(() => AssetTagsMinAggregate, {nullable:true})
    _min?: AssetTagsMinAggregate;

    @Field(() => AssetTagsMaxAggregate, {nullable:true})
    _max?: AssetTagsMaxAggregate;
}
