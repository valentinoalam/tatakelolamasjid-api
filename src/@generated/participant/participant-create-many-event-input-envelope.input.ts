import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateManyEventInput } from './participant-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class ParticipantCreateManyEventInputEnvelope {

    @Field(() => [ParticipantCreateManyEventInput], {nullable:false})
    @Type(() => ParticipantCreateManyEventInput)
    data!: Array<ParticipantCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
