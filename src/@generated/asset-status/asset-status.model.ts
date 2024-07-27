import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Asset } from '../asset/asset.model';

@ObjectType()
export class AssetStatus {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assetId!: string;

    @Field(() => Int, {nullable:false})
    availableQty!: number;

    @Field(() => Int, {nullable:false})
    totalQty!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Asset, {nullable:false})
    asset?: Asset;
}
