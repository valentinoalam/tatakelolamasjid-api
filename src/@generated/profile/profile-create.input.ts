import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { ParticipantCreateNestedManyWithoutProfileInput } from '../participant/participant-create-nested-many-without-profile.input';

@InputType()
export class ProfileCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProfileInput;

    @Field(() => ParticipantCreateNestedManyWithoutProfileInput, {nullable:true})
    Participant?: ParticipantCreateNestedManyWithoutProfileInput;
}