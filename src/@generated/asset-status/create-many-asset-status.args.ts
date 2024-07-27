import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusCreateManyInput } from './asset-status-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssetStatusArgs {

    @Field(() => [AssetStatusCreateManyInput], {nullable:false})
    @Type(() => AssetStatusCreateManyInput)
    data!: Array<AssetStatusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
