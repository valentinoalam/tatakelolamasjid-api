import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusCreateInput } from './asset-status-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAssetStatusArgs {

    @Field(() => AssetStatusCreateInput, {nullable:false})
    @Type(() => AssetStatusCreateInput)
    data!: AssetStatusCreateInput;
}
