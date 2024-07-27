import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssetStatusSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    availableQty?: true;

    @Field(() => Boolean, {nullable:true})
    totalQty?: true;
}
