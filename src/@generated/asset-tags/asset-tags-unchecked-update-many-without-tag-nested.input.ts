import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateWithoutTagInput } from './asset-tags-create-without-tag.input';
import { Type } from 'class-transformer';
import { AssetTagsCreateOrConnectWithoutTagInput } from './asset-tags-create-or-connect-without-tag.input';
import { AssetTagsUpsertWithWhereUniqueWithoutTagInput } from './asset-tags-upsert-with-where-unique-without-tag.input';
import { AssetTagsCreateManyTagInputEnvelope } from './asset-tags-create-many-tag-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssetTagsWhereUniqueInput } from './asset-tags-where-unique.input';
import { AssetTagsUpdateWithWhereUniqueWithoutTagInput } from './asset-tags-update-with-where-unique-without-tag.input';
import { AssetTagsUpdateManyWithWhereWithoutTagInput } from './asset-tags-update-many-with-where-without-tag.input';
import { AssetTagsScalarWhereInput } from './asset-tags-scalar-where.input';

@InputType()
export class AssetTagsUncheckedUpdateManyWithoutTagNestedInput {

    @Field(() => [AssetTagsCreateWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsCreateWithoutTagInput)
    create?: Array<AssetTagsCreateWithoutTagInput>;

    @Field(() => [AssetTagsCreateOrConnectWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsCreateOrConnectWithoutTagInput)
    connectOrCreate?: Array<AssetTagsCreateOrConnectWithoutTagInput>;

    @Field(() => [AssetTagsUpsertWithWhereUniqueWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsUpsertWithWhereUniqueWithoutTagInput)
    upsert?: Array<AssetTagsUpsertWithWhereUniqueWithoutTagInput>;

    @Field(() => AssetTagsCreateManyTagInputEnvelope, {nullable:true})
    @Type(() => AssetTagsCreateManyTagInputEnvelope)
    createMany?: AssetTagsCreateManyTagInputEnvelope;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsWhereUniqueInput], {nullable:true})
    @Type(() => AssetTagsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetTagsWhereUniqueInput, 'id' | 'assetId_tagId'>>;

    @Field(() => [AssetTagsUpdateWithWhereUniqueWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsUpdateWithWhereUniqueWithoutTagInput)
    update?: Array<AssetTagsUpdateWithWhereUniqueWithoutTagInput>;

    @Field(() => [AssetTagsUpdateManyWithWhereWithoutTagInput], {nullable:true})
    @Type(() => AssetTagsUpdateManyWithWhereWithoutTagInput)
    updateMany?: Array<AssetTagsUpdateManyWithWhereWithoutTagInput>;

    @Field(() => [AssetTagsScalarWhereInput], {nullable:true})
    @Type(() => AssetTagsScalarWhereInput)
    deleteMany?: Array<AssetTagsScalarWhereInput>;
}
