import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetStatusMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    assetId?: string;

    @Field(() => Int, {nullable:true})
    availableQty?: number;

    @Field(() => Int, {nullable:true})
    totalQty?: number;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
