import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantUncheckedCreateNestedManyWithoutEmergencyContactInput } from '../participant/participant-unchecked-create-nested-many-without-emergency-contact.input';

@InputType()
export class EmergencyContactUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ParticipantUncheckedCreateNestedManyWithoutEmergencyContactInput, {nullable:true})
    Participant?: ParticipantUncheckedCreateNestedManyWithoutEmergencyContactInput;
}
