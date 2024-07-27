import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { Type } from 'class-transformer';
import { EmergencyContactUpdateWithoutParticipantInput } from './emergency-contact-update-without-participant.input';

@InputType()
export class EmergencyContactUpdateToOneWithWhereWithoutParticipantInput {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;

    @Field(() => EmergencyContactUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => EmergencyContactUpdateWithoutParticipantInput)
    data!: EmergencyContactUpdateWithoutParticipantInput;
}
