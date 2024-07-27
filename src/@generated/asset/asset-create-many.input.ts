import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetTypes } from '../prisma/asset-types.enum';
import { AcquisitionOrigin } from '../prisma/acquisition-origin.enum';

@InputType()
export class AssetCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    date_acquired!: Date | string;

    @Field(() => Int, {nullable:false})
    economicLife!: number;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => String, {nullable:false})
    editedBy!: string;

    @Field(() => AssetTypes, {nullable:false})
    type!: keyof typeof AssetTypes;

    @Field(() => AcquisitionOrigin, {nullable:false})
    origin!: keyof typeof AcquisitionOrigin;
}
