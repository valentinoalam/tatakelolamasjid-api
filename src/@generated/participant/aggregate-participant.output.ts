import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ParticipantCountAggregate } from './participant-count-aggregate.output';
import { ParticipantMinAggregate } from './participant-min-aggregate.output';
import { ParticipantMaxAggregate } from './participant-max-aggregate.output';

@ObjectType()
export class AggregateParticipant {

    @Field(() => ParticipantCountAggregate, {nullable:true})
    _count?: ParticipantCountAggregate;

    @Field(() => ParticipantMinAggregate, {nullable:true})
    _min?: ParticipantMinAggregate;

    @Field(() => ParticipantMaxAggregate, {nullable:true})
    _max?: ParticipantMaxAggregate;
}
