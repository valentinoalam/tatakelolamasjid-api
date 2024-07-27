import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ParticipantCreateNestedOneWithoutMemberInput } from '../participant/participant-create-nested-one-without-member.input';

@InputType()
export class FamilyMemberCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    information!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => ParticipantCreateNestedOneWithoutMemberInput, {nullable:false})
    guardian!: ParticipantCreateNestedOneWithoutMemberInput;
}
