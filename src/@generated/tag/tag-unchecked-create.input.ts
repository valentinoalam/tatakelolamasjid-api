import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsUncheckedCreateNestedManyWithoutTagInput } from '../asset-tags/asset-tags-unchecked-create-nested-many-without-tag.input';

@InputType()
export class TagUncheckedCreateInput {

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

    @Field(() => AssetTagsUncheckedCreateNestedManyWithoutTagInput, {nullable:true})
    AssetTags?: AssetTagsUncheckedCreateNestedManyWithoutTagInput;
}
