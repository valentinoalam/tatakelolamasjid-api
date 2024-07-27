import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsCreateInput } from './asset-tags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssetTagsArgs {

    @Field(() => AssetTagsCreateInput, {nullable:false})
    @Type(() => AssetTagsCreateInput)
    data!: AssetTagsCreateInput;
}
