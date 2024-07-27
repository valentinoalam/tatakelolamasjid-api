import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VendorCountAggregate } from './vendor-count-aggregate.output';
import { VendorMinAggregate } from './vendor-min-aggregate.output';
import { VendorMaxAggregate } from './vendor-max-aggregate.output';

@ObjectType()
export class AggregateVendor {

    @Field(() => VendorCountAggregate, {nullable:true})
    _count?: VendorCountAggregate;

    @Field(() => VendorMinAggregate, {nullable:true})
    _min?: VendorMinAggregate;

    @Field(() => VendorMaxAggregate, {nullable:true})
    _max?: VendorMaxAggregate;
}
