import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetSumAggregate {

    @Field(() => Int, {nullable:true})
    economicLife?: number;

    @Field(() => Int, {nullable:true})
    qty?: number;
}
