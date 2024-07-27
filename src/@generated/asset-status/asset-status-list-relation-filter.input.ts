import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetStatusWhereInput } from './asset-status-where.input';

@InputType()
export class AssetStatusListRelationFilter {

    @Field(() => AssetStatusWhereInput, {nullable:true})
    every?: AssetStatusWhereInput;

    @Field(() => AssetStatusWhereInput, {nullable:true})
    some?: AssetStatusWhereInput;

    @Field(() => AssetStatusWhereInput, {nullable:true})
    none?: AssetStatusWhereInput;
}
