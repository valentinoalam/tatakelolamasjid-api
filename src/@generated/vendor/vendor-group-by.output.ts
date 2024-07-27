import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VendorCountAggregate } from './vendor-count-aggregate.output';
import { VendorMinAggregate } from './vendor-min-aggregate.output';
import { VendorMaxAggregate } from './vendor-max-aggregate.output';

@ObjectType()
export class VendorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    businessField!: string;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VendorCountAggregate, {nullable:true})
    _count?: VendorCountAggregate;

    @Field(() => VendorMinAggregate, {nullable:true})
    _min?: VendorMinAggregate;

    @Field(() => VendorMaxAggregate, {nullable:true})
    _max?: VendorMaxAggregate;
}
