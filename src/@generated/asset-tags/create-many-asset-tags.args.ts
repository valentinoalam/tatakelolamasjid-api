import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsCreateManyInput } from './asset-tags-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssetTagsArgs {

    @Field(() => [AssetTagsCreateManyInput], {nullable:false})
    @Type(() => AssetTagsCreateManyInput)
    data!: Array<AssetTagsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
