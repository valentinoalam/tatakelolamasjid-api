import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AssetTagsScalarWhereInput {

    @Field(() => [AssetTagsScalarWhereInput], {nullable:true})
    AND?: Array<AssetTagsScalarWhereInput>;

    @Field(() => [AssetTagsScalarWhereInput], {nullable:true})
    OR?: Array<AssetTagsScalarWhereInput>;

    @Field(() => [AssetTagsScalarWhereInput], {nullable:true})
    NOT?: Array<AssetTagsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    assetId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tagId?: StringFilter;
}
