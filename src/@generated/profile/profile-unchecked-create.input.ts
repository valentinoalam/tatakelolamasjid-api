import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantUncheckedCreateNestedManyWithoutProfileInput } from '../participant/participant-unchecked-create-nested-many-without-profile.input';

@InputType()
export class ProfileUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    dtBirth!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isMan!: boolean;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    domisili?: string;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ParticipantUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    Participant?: ParticipantUncheckedCreateNestedManyWithoutProfileInput;
}
