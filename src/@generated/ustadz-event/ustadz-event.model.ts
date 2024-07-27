import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Ustadz } from '../ustadz/ustadz.model';
import { Event } from '../event/event.model';

@ObjectType()
export class UstadzEvent {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    ustadzId!: string;

    @Field(() => String, {nullable:false})
    eventId!: string;

    @Field(() => Ustadz, {nullable:false})
    Ustadz?: Ustadz;

    @Field(() => Event, {nullable:false})
    Event?: Event;
}
