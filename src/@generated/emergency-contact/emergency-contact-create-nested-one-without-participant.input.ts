import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactCreateWithoutParticipantInput } from './emergency-contact-create-without-participant.input';
import { Type } from 'class-transformer';
import { EmergencyContactCreateOrConnectWithoutParticipantInput } from './emergency-contact-create-or-connect-without-participant.input';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';

@InputType()
export class EmergencyContactCreateNestedOneWithoutParticipantInput {

    @Field(() => EmergencyContactCreateWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactCreateWithoutParticipantInput)
    create?: EmergencyContactCreateWithoutParticipantInput;

    @Field(() => EmergencyContactCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutParticipantInput;

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:true})
    @Type(() => EmergencyContactWhereUniqueInput)
    connect?: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;
}
