import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Asset } from '../asset/asset.model';
import { Tag } from '../tag/tag.model';

@ObjectType()
export class AssetTags {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assetId!: string;

    @Field(() => String, {nullable:false})
    tagId!: string;

    @Field(() => Asset, {nullable:false})
    asset?: Asset;

    @Field(() => Tag, {nullable:false})
    tag?: Tag;
}
