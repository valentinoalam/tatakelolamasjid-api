import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateWithoutTagInput } from './asset-tags-create-without-tag.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateOrConnectWithoutTagInput } from './asset-tags-create-or-connect-without-tag.input';
import { AssetTagsCreateManyTagInputEnvelope } from './asset-tags-create-many-tag-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';

@InputType()
export class AssetTagsCreateNestedManyWithoutTagInput {

    @Field(() => [AssetTagsCreateWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsCreateWithoutTagInput)
    create?: Array<AssetTagsCreateWithoutTagInput>;

    @Field(() => [AssetTagsCreateOrConnectWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsCreateOrConnectWithoutTagInput)
    connectOrCreate?: Array<AssetTagsCreateOrConnectWithoutTagInput>;

    @Field(() => AssetTagsCreateManyTagInputEnvelope, {nullable:true})
    @Type(() => AssetTagsCreateManyTagInputEnvelope)
    createMany?: AssetTagsCreateManyTagInputEnvelope;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;
}
