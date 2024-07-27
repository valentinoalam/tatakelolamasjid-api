import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsWhereInput } from './asset-tags-where.input';

@InputType()
export class AssetTagsListRelationFilter {

    @Field(() => AssetTagsWhereInput, {nullable:true})
    every?: AssetTagsWhereInput;

    @Field(() => AssetTagsWhereInput, {nullable:true})
    some?: AssetTagsWhereInput;

    @Field(() => AssetTagsWhereInput, {nullable:true})
    none?: AssetTagsWhereInput;
}
