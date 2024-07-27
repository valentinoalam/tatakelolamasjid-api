import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAssetStatusArgs {

    @Field(() => AssetStatusWhereInput, {nullable:true})
    @Type(() => AssetStatusWhereInput)
    where?: AssetStatusWhereInput;
}
