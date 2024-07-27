import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactCreateWithoutParticipantInput } from './emergency-contact-create-without-participant.input';
import { Type } from 'class-transformer';
import { EmergencyContactCreateOrConnectWithoutParticipantInput } from './emergency-contact-create-or-connect-without-participant.input';
import { EmergencyContactUpsertWithoutParticipantInput } from './emergency-contact-upsert-without-participant.input';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { EmergencyContactUpdateToOneWithWhereWithoutParticipantInput } from './emergency-contact-update-to-one-with-where-without-participant.input';

@InputType()
export class EmergencyContactUpdateOneRequiredWithoutParticipantNestedInput {

    @Field(() => EmergencyContactCreateWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactCreateWithoutParticipantInput)
    create?: EmergencyContactCreateWithoutParticipantInput;

    @Field(() => EmergencyContactCreateOrConnectWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutParticipantInput;

    @Field(() => EmergencyContactUpsertWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactUpsertWithoutParticipantInput)
    upsert?: EmergencyContactUpsertWithoutParticipantInput;

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:true})
    @Type(() => EmergencyContactWhereUniqueInput)
    connect?: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;

    @Field(() => EmergencyContactUpdateToOneWithWhereWithoutParticipantInput, {nullable:true})
    @Type(() => EmergencyContactUpdateToOneWithWhereWithoutParticipantInput)
    update?: EmergencyContactUpdateToOneWithWhereWithoutParticipantInput;
}
