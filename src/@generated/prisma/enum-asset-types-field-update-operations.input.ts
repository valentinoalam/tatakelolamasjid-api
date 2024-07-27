import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetTypes } from './asset-types.enum';

@InputType()
export class EnumAssetTypesFieldUpdateOperationsInput {

    @Field(() => AssetTypes, {nullable:true})
    set?: keyof typeof AssetTypes;
}
