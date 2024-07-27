import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { Type } from 'class-transformer';
import { EmergencyContactOrderByWithAggregationInput } from './emergency-contact-order-by-with-aggregation.input';
import { EmergencyContactScalarFieldEnum } from './emergency-contact-scalar-field.enum';
import { EmergencyContactScalarWhereWithAggregatesInput } from './emergency-contact-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmergencyContactCountAggregateInput } from './emergency-contact-count-aggregate.input';
import { EmergencyContactMinAggregateInput } from './emergency-contact-min-aggregate.input';
import { EmergencyContactMaxAggregateInput } from './emergency-contact-max-aggregate.input';

@ArgsType()
export class EmergencyContactGroupByArgs {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;

    @Field(() => [EmergencyContactOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmergencyContactOrderByWithAggregationInput>;

    @Field(() => [EmergencyContactScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmergencyContactScalarFieldEnum>;

    @Field(() => EmergencyContactScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmergencyContactScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmergencyContactCountAggregateInput, {nullable:true})
    _count?: EmergencyContactCountAggregateInput;

    @Field(() => EmergencyContactMinAggregateInput, {nullable:true})
    _min?: EmergencyContactMinAggregateInput;

    @Field(() => EmergencyContactMaxAggregateInput, {nullable:true})
    _max?: EmergencyContactMaxAggregateInput;
}
