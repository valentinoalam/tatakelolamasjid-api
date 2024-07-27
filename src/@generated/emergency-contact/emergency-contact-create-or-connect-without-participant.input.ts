import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { Type } from 'class-transformer';
import { EmergencyContactCreateWithoutParticipantInput } from './emergency-contact-create-without-participant.input';

@InputType()
export class EmergencyContactCreateOrConnectWithoutParticipantInput {

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:false})
    @Type(() => EmergencyContactWhereUniqueInput)
    where!: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;

    @Field(() => EmergencyContactCreateWithoutParticipantInput, {nullable:false})
    @Type(() => EmergencyContactCreateWithoutParticipantInput)
    create!: EmergencyContactCreateWithoutParticipantInput;
}
