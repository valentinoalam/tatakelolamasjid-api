import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';

@ObjectType()
export class EventMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    place?: string;

    @Field(() => Date, {nullable:true})
    dtStart?: Date | string;

    @Field(() => Date, {nullable:true})
    dtEnd?: Date | string;

    @Field(() => Int, {nullable:true})
    quota?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Period, {nullable:true})
    heldPeriod?: keyof typeof Period;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;
}
