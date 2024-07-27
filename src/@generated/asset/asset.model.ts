import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetTypes } from '../prisma/asset-types.enum';
import { AcquisitionOrigin } from '../prisma/acquisition-origin.enum';
import { AssetStatus } from '../asset-status/asset-status.model';
import { AssetTags } from '../asset-tags/asset-tags.model';
import { AssetCount } from './asset-count.output';

@ObjectType()
export class Asset {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    date_acquired!: Date;

    @Field(() => Int, {nullable:false})
    economicLife!: number;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => String, {nullable:false})
    editedBy!: string;

    @Field(() => AssetTypes, {nullable:false})
    type!: keyof typeof AssetTypes;

    @Field(() => AcquisitionOrigin, {nullable:false})
    origin!: keyof typeof AcquisitionOrigin;

    @Field(() => [AssetStatus], {nullable:true})
    AssetStatus?: Array<AssetStatus>;

    @Field(() => [AssetTags], {nullable:true})
    AssetTags?: Array<AssetTags>;

    @Field(() => AssetCount, {nullable:false})
    _count?: AssetCount;
}
