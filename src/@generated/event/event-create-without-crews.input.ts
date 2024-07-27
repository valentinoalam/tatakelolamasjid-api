import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { ParticipantCreateNestedManyWithoutEventInput } from '../participant/participant-create-nested-many-without-event.input';
import { UstadzEventCreateNestedManyWithoutEventInput } from '../ustadz-event/ustadz-event-create-nested-many-without-event.input';

@InputType()
export class EventCreateWithoutCrewsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    place!: string;

    @Field(() => Date, {nullable:false})
    dtStart!: Date | string;

    @Field(() => Date, {nullable:false})
    dtEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    quota!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Period, {nullable:false})
    heldPeriod!: keyof typeof Period;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => ParticipantCreateNestedManyWithoutEventInput, {nullable:true})
    participant?: ParticipantCreateNestedManyWithoutEventInput;

    @Field(() => UstadzEventCreateNestedManyWithoutEventInput, {nullable:true})
    speakers?: UstadzEventCreateNestedManyWithoutEventInput;
}
