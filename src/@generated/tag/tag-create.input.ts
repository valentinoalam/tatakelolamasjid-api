import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateNestedManyWithoutTagInput } from '../asset-tags/asset-tags-create-nested-many-without-tag.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssetTagsCreateNestedManyWithoutTagInput, {nullable:true})
    AssetTags?: AssetTagsCreateNestedManyWithoutTagInput;
}
