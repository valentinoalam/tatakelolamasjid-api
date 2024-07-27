import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AssetStatusUncheckedCreateWithoutAssetInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    availableQty!: number;

    @Field(() => Int, {nullable:false})
    totalQty!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
