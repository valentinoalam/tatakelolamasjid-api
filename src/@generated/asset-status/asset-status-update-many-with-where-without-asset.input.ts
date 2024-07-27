import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusScalarWhereInput } from './asset-status-scalar-where.input';
import { Type } from 'class-transformer';
import { AssetStatusUpdateManyMutationInput } from './asset-status-update-many-mutation.input';

@InputType()
export class AssetStatusUpdateManyWithWhereWithoutAssetInput {

    @Field(() => AssetStatusScalarWhereInput, {nullable:false})
    @Type(() => AssetStatusScalarWhereInput)
    where!: AssetStatusScalarWhereInput;

    @Field(() => AssetStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => AssetStatusUpdateManyMutationInput)
    data!: AssetStatusUpdateManyMutationInput;
}
