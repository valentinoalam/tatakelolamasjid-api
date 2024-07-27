import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { Type } from 'class-transformer';
import { EmergencyContactOrderByWithRelationInput } from './emergency-contact-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmergencyContactCountAggregateInput } from './emergency-contact-count-aggregate.input';
import { EmergencyContactMinAggregateInput } from './emergency-contact-min-aggregate.input';
import { EmergencyContactMaxAggregateInput } from './emergency-contact-max-aggregate.input';

@ArgsType()
export class EmergencyContactAggregateArgs {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;

    @Field(() => [EmergencyContactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmergencyContactOrderByWithRelationInput>;

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;

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
