import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetTypes } from '../prisma/asset-types.enum';
import { AcquisitionOrigin } from '../prisma/acquisition-origin.enum';

@ObjectType()
export class AssetMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    date_acquired?: Date | string;

    @Field(() => Int, {nullable:true})
    economicLife?: number;

    @Field(() => Int, {nullable:true})
    qty?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    editedBy?: string;

    @Field(() => AssetTypes, {nullable:true})
    type?: keyof typeof AssetTypes;

    @Field(() => AcquisitionOrigin, {nullable:true})
    origin?: keyof typeof AcquisitionOrigin;
}
