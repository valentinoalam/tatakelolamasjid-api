import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ParticipantUpdateOneRequiredWithoutMemberNestedInput } from '../participant/participant-update-one-required-without-member-nested.input';

@InputType()
export class FamilyMemberUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    information?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationType?: StringFieldUpdateOperationsInput;

    @Field(() => ParticipantUpdateOneRequiredWithoutMemberNestedInput, {nullable:true})
    guardian?: ParticipantUpdateOneRequiredWithoutMemberNestedInput;
}
