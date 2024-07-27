import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { Participant } from '../participant/participant.model';
import { Position } from '../position/position.model';
import { UstadzEvent } from '../ustadz-event/ustadz-event.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    place!: string;

    @Field(() => Date, {nullable:false})
    dtStart!: Date;

    @Field(() => Date, {nullable:false})
    dtEnd!: Date;

    @Field(() => Int, {nullable:false})
    quota!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Period, {nullable:false})
    heldPeriod!: keyof typeof Period;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => [Participant], {nullable:true})
    participant?: Array<Participant>;

    @Field(() => [Position], {nullable:true})
    crews?: Array<Position>;

    @Field(() => [UstadzEvent], {nullable:true})
    speakers?: Array<UstadzEvent>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
