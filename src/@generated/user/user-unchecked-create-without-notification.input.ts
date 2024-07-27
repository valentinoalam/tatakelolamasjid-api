import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PaymentMethodUncheckedCreateNestedManyWithoutUserInput } from '../payment-method/payment-method-unchecked-create-nested-many-without-user.input';
import { MemoUncheckedCreateNestedManyWithoutUserInput } from '../memo/memo-unchecked-create-nested-many-without-user.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { PositionUncheckedCreateNestedOneWithoutUserInput } from '../position/position-unchecked-create-nested-one-without-user.input';
import { ParticipantUncheckedCreateNestedManyWithoutUserInput } from '../participant/participant-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutNotificationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    emailAddress!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    api_token?: string;

    @Field(() => String, {nullable:false})
    isConfirmed!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => PaymentMethodUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    paymentMethod?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MemoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    memo?: MemoUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PositionUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    position?: PositionUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => ParticipantUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Participant?: ParticipantUncheckedCreateNestedManyWithoutUserInput;
}