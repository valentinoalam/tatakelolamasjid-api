import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactUpdateWithoutParticipantInput } from './emergency-contact-update-without-participant.input';
import { Type } from 'class-transformer';
import { EmergencyContactCreateWithoutParticipantInput } from './emergency-contact-create-without-participant.input';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';

@InputType()
export class EmergencyContactUpsertWithoutParticipantInput {

    @Field(() => EmergencyContactUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => EmergencyContactUpdateWithoutParticipantInput)
    update!: EmergencyContactUpdateWithoutParticipantInput;

    @Field(() => EmergencyContactCreateWithoutParticipantInput, {nullable:false})
    @Type(() => EmergencyContactCreateWithoutParticipantInput)
    create!: EmergencyContactCreateWithoutParticipantInput;

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;
}
