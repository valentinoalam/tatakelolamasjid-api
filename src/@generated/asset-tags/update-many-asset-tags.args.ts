import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsUpdateManyMutationInput } from './asset-tags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssetTagsWhereInput } from './asset-tags-where.input';

@ArgsType()
export class UpdateManyAssetTagsArgs {

    @Field(() => AssetTagsUpdateManyMutationInput, {nullable:false})
    @Type(() => AssetTagsUpdateManyMutationInput)
    data!: AssetTagsUpdateManyMutationInput;

    @Field(() => AssetTagsWhereInput, {nullable:true})
    @Type(() => AssetTagsWhereInput)
    where?: AssetTagsWhereInput;
}
