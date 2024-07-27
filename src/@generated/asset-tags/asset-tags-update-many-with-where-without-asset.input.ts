import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsScalarWhereInput } from './asset-tags-scalar-where.input';
import { Type } from 'class-transformer';
import { AssetTagsUpdateManyMutationInput } from './asset-tags-update-many-mutation.input';

@InputType()
export class AssetTagsUpdateManyWithWhereWithoutAssetInput {

    @Field(() => AssetTagsScalarWhereInput, {nullable:false})
    @Type(() => AssetTagsScalarWhereInput)
    where!: AssetTagsScalarWhereInput;

    @Field(() => AssetTagsUpdateManyMutationInput, {nullable:false})
    @Type(() => AssetTagsUpdateManyMutationInput)
    data!: AssetTagsUpdateManyMutationInput;
}
