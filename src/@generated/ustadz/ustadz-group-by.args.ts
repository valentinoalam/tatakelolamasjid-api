import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { Type } from 'class-transformer';
import { UstadzOrderByWithAggregationInput } from './ustadz-order-by-with-aggregation.input';
import { UstadzScalarFieldEnum } from './ustadz-scalar-field.enum';
import { UstadzScalarWhereWithAggregatesInput } from './ustadz-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UstadzCountAggregateInput } from './ustadz-count-aggregate.input';
import { UstadzMinAggregateInput } from './ustadz-min-aggregate.input';
import { UstadzMaxAggregateInput } from './ustadz-max-aggregate.input';

@ArgsType()
export class UstadzGroupByArgs {

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;

    @Field(() => [UstadzOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UstadzOrderByWithAggregationInput>;

    @Field(() => [UstadzScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UstadzScalarFieldEnum>;

    @Field(() => UstadzScalarWhereWithAggregatesInput, {nullable:true})
    having?: UstadzScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UstadzCountAggregateInput, {nullable:true})
    _count?: UstadzCountAggregateInput;

    @Field(() => UstadzMinAggregateInput, {nullable:true})
    _min?: UstadzMinAggregateInput;

    @Field(() => UstadzMaxAggregateInput, {nullable:true})
    _max?: UstadzMaxAggregateInput;
}
