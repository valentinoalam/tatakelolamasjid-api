import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateNestedManyWithoutEmergencyContactInput } from '../participant/participant-create-nested-many-without-emergency-contact.input';

@InputType()
export class EmergencyContactCreateInput {

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

    @Field(() => ParticipantCreateNestedManyWithoutEmergencyContactInput, {nullable:true})
    Participant?: ParticipantCreateNestedManyWithoutEmergencyContactInput;
}
