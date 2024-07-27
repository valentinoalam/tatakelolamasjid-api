import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PositionCountAggregate } from './position-count-aggregate.output';
import { PositionMinAggregate } from './position-min-aggregate.output';
import { PositionMaxAggregate } from './position-max-aggregate.output';

@ObjectType()
export class PositionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    eventId?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    periode!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PositionCountAggregate, {nullable:true})
    _count?: PositionCountAggregate;

    @Field(() => PositionMinAggregate, {nullable:true})
    _min?: PositionMinAggregate;

    @Field(() => PositionMaxAggregate, {nullable:true})
    _max?: PositionMaxAggregate;
}
