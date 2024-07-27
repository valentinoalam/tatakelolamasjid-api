import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventWhereInput } from './ustadz-event-where.input';
import { Type } from 'class-transformer';
import { UstadzEventOrderByWithAggregationInput } from './ustadz-event-order-by-with-aggregation.input';
import { UstadzEventScalarFieldEnum } from './ustadz-event-scalar-field.enum';
import { UstadzEventScalarWhereWithAggregatesInput } from './ustadz-event-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UstadzEventCountAggregateInput } from './ustadz-event-count-aggregate.input';
import { UstadzEventMinAggregateInput } from './ustadz-event-min-aggregate.input';
import { UstadzEventMaxAggregateInput } from './ustadz-event-max-aggregate.input';

@ArgsType()
export class UstadzEventGroupByArgs {

    @Field(() => UstadzEventWhereInput, {nullable:true})
    @Type(() => UstadzEventWhereInput)
    where?: UstadzEventWhereInput;

    @Field(() => [UstadzEventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UstadzEventOrderByWithAggregationInput>;

    @Field(() => [UstadzEventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UstadzEventScalarFieldEnum>;

    @Field(() => UstadzEventScalarWhereWithAggregatesInput, {nullable:true})
    having?: UstadzEventScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UstadzEventCountAggregateInput, {nullable:true})
    _count?: UstadzEventCountAggregateInput;

    @Field(() => UstadzEventMinAggregateInput, {nullable:true})
    _min?: UstadzEventMinAggregateInput;

    @Field(() => UstadzEventMaxAggregateInput, {nullable:true})
    _max?: UstadzEventMaxAggregateInput;
}
