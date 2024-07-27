import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTagsCreateManyTagInput } from './asset-tags-create-many-tag.input';
import { Type } from 'class-transformer';

@InputType()
export class AssetTagsCreateManyTagInputEnvelope {

    @Field(() => [AssetTagsCreateManyTagInput], {nullable:false})
    @Type(() => AssetTagsCreateManyTagInput)
    data!: Array<AssetTagsCreateManyTagInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
