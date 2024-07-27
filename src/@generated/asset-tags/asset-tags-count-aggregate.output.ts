import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetTagsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => Int, {nullable:false})
    tagId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
