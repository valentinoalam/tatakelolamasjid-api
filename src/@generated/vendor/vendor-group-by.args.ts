import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorWhereInput } from './vendor-where.input';
import { Type } from 'class-transformer';
import { VendorOrderByWithAggregationInput } from './vendor-order-by-with-aggregation.input';
import { VendorScalarFieldEnum } from './vendor-scalar-field.enum';
import { VendorScalarWhereWithAggregatesInput } from './vendor-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VendorCountAggregateInput } from './vendor-count-aggregate.input';
import { VendorMinAggregateInput } from './vendor-min-aggregate.input';
import { VendorMaxAggregateInput } from './vendor-max-aggregate.input';

@ArgsType()
export class VendorGroupByArgs {

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;

    @Field(() => [VendorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VendorOrderByWithAggregationInput>;

    @Field(() => [VendorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VendorScalarFieldEnum>;

    @Field(() => VendorScalarWhereWithAggregatesInput, {nullable:true})
    having?: VendorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VendorCountAggregateInput, {nullable:true})
    _count?: VendorCountAggregateInput;

    @Field(() => VendorMinAggregateInput, {nullable:true})
    _min?: VendorMinAggregateInput;

    @Field(() => VendorMaxAggregateInput, {nullable:true})
    _max?: VendorMaxAggregateInput;
}
