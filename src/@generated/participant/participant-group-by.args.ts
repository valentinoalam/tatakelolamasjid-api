import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';
import { Type } from 'class-transformer';
import { ParticipantOrderByWithAggregationInput } from './participant-order-by-with-aggregation.input';
import { ParticipantScalarFieldEnum } from './participant-scalar-field.enum';
import { ParticipantScalarWhereWithAggregatesInput } from './participant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ParticipantCountAggregateInput } from './participant-count-aggregate.input';
import { ParticipantMinAggregateInput } from './participant-min-aggregate.input';
import { ParticipantMaxAggregateInput } from './participant-max-aggregate.input';

@ArgsType()
export class ParticipantGroupByArgs {

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;

    @Field(() => [ParticipantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ParticipantOrderByWithAggregationInput>;

    @Field(() => [ParticipantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ParticipantScalarFieldEnum>;

    @Field(() => ParticipantScalarWhereWithAggregatesInput, {nullable:true})
    having?: ParticipantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ParticipantCountAggregateInput, {nullable:true})
    _count?: ParticipantCountAggregateInput;

    @Field(() => ParticipantMinAggregateInput, {nullable:true})
    _min?: ParticipantMinAggregateInput;

    @Field(() => ParticipantMaxAggregateInput, {nullable:true})
    _max?: ParticipantMaxAggregateInput;
}
