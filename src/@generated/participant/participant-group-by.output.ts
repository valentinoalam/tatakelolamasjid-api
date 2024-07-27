import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ParticipantCountAggregate } from './participant-count-aggregate.output';
import { ParticipantMinAggregate } from './participant-min-aggregate.output';
import { ParticipantMaxAggregate } from './participant-max-aggregate.output';

@ObjectType()
export class ParticipantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    eventId!: string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    emergencyId!: string;

    @Field(() => Boolean, {nullable:false})
    withFamily!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ParticipantCountAggregate, {nullable:true})
    _count?: ParticipantCountAggregate;

    @Field(() => ParticipantMinAggregate, {nullable:true})
    _min?: ParticipantMinAggregate;

    @Field(() => ParticipantMaxAggregate, {nullable:true})
    _max?: ParticipantMaxAggregate;
}
