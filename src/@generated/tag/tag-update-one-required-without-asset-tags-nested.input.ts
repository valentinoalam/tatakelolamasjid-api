import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutAssetTagsInput } from './tag-create-without-asset-tags.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutAssetTagsInput } from './tag-create-or-connect-without-asset-tags.input';
import { TagUpsertWithoutAssetTagsInput } from './tag-upsert-without-asset-tags.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateToOneWithWhereWithoutAssetTagsInput } from './tag-update-to-one-with-where-without-asset-tags.input';

@InputType()
export class TagUpdateOneRequiredWithoutAssetTagsNestedInput {

    @Field(() => TagCreateWithoutAssetTagsInput, {nullable:true})
    @Type(() => TagCreateWithoutAssetTagsInput)
    create?: TagCreateWithoutAssetTagsInput;

    @Field(() => TagCreateOrConnectWithoutAssetTagsInput, {nullable:true})
    @Type(() => TagCreateOrConnectWithoutAssetTagsInput)
    connectOrCreate?: TagCreateOrConnectWithoutAssetTagsInput;

    @Field(() => TagUpsertWithoutAssetTagsInput, {nullable:true})
    @Type(() => TagUpsertWithoutAssetTagsInput)
    upsert?: TagUpsertWithoutAssetTagsInput;

    @Field(() => TagWhereUniqueInput, {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagUpdateToOneWithWhereWithoutAssetTagsInput, {nullable:true})
    @Type(() => TagUpdateToOneWithWhereWithoutAssetTagsInput)
    update?: TagUpdateToOneWithWhereWithoutAssetTagsInput;
}
