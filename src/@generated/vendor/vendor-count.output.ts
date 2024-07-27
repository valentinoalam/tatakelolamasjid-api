import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VendorCount {

    @Field(() => Int, {nullable:false})
    transaction?: number;
}
