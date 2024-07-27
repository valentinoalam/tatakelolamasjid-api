import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VendorWhereInput } from './vendor-where.input';
import { Type } from 'class-transformer';
import { VendorOrderByWithRelationInput } from './vendor-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VendorCountAggregateInput } from './vendor-count-aggregate.input';
import { VendorMinAggregateInput } from './vendor-min-aggregate.input';
import { VendorMaxAggregateInput } from './vendor-max-aggregate.input';

@ArgsType()
export class VendorAggregateArgs {

    @Field(() => VendorWhereInput, {nullable:true})
    @Type(() => VendorWhereInput)
    where?: VendorWhereInput;

    @Field(() => [VendorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VendorOrderByWithRelationInput>;

    @Field(() => VendorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VendorWhereUniqueInput, 'id'>;

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
