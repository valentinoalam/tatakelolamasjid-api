import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetTagsWhereInput } from './asset-tags-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAssetTagsArgs {

    @Field(() => AssetTagsWhereInput, {nullable:true})
    @Type(() => AssetTagsWhereInput)
    where?: AssetTagsWhereInput;
}
