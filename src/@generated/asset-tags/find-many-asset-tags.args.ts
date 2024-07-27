import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsWhereInput } from './asset-tags-where.input';
import { Type } from 'class-transformer';
import { AssetTagsOrderByWithRelationInput } from './asset-tags-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssetTagsScalarFieldEnum } from './asset-tags-scalar-field.enum';

@ArgsType()
export class FindManyAssetTagsArgs {

    @Field(() => AssetTagsWhereInput, {nullable:true})
    @Type(() => AssetTagsWhereInput)
    where?: AssetTagsWhereInput;

    @Field(() => [AssetTagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssetTagsOrderByWithRelationInput>;

    @Field(() => AssetTagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AssetTagsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AssetTagsScalarFieldEnum>;
}
