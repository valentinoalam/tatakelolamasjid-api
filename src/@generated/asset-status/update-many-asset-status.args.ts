import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssetStatusUpdateManyMutationInput } from './asset-status-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssetStatusWhereInput } from './asset-status-where.input';

@ArgsType()
export class UpdateManyAssetStatusArgs {

    @Field(() => AssetStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => AssetStatusUpdateManyMutationInput)
    data!: AssetStatusUpdateManyMutationInput;

    @Field(() => AssetStatusWhereInput, {nullable:true})
    @Type(() => AssetStatusWhereInput)
    where?: AssetStatusWhereInput;
}
