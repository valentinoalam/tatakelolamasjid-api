import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateManyEmergencyContactInput } from './participant-create-many-emergency-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class ParticipantCreateManyEmergencyContactInputEnvelope {

    @Field(() => [ParticipantCreateManyEmergencyContactInput], {nullable:false})
    @Type(() => ParticipantCreateManyEmergencyContactInput)
    data!: Array<ParticipantCreateManyEmergencyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
