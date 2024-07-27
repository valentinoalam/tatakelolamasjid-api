import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AssetStatusAvgAggregate {

    @Field(() => Float, {nullable:true})
    availableQty?: number;

    @Field(() => Float, {nullable:true})
    totalQty?: number;
}
