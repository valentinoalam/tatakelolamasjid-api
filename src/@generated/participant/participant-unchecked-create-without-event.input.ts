import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyMemberUncheckedCreateNestedManyWithoutGuardianInput } from '../family-member/family-member-unchecked-create-nested-many-without-guardian.input';

@InputType()
export class ParticipantUncheckedCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => String, {nullable:false})
    emergencyId!: string;

    @Field(() => Boolean, {nullable:false})
    withFamily!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FamilyMemberUncheckedCreateNestedManyWithoutGuardianInput, {nullable:true})
    member?: FamilyMemberUncheckedCreateNestedManyWithoutGuardianInput;
}
