import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetCount {

    @Field(() => Int, {nullable:false})
    AssetStatus?: number;

    @Field(() => Int, {nullable:false})
    AssetTags?: number;
}
