import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PaymentMethodCreateNestedManyWithoutUserInput } from '../payment-method/payment-method-create-nested-many-without-user.input';
import { MemoCreateNestedManyWithoutUserInput } from '../memo/memo-create-nested-many-without-user.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { PositionCreateNestedOneWithoutUserInput } from '../position/position-create-nested-one-without-user.input';
import { ParticipantCreateNestedManyWithoutUserInput } from '../participant/participant-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutNotificationInput {

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

    @Field(() => PaymentMethodCreateNestedManyWithoutUserInput, {nullable:true})
    paymentMethod?: PaymentMethodCreateNestedManyWithoutUserInput;

    @Field(() => MemoCreateNestedManyWithoutUserInput, {nullable:true})
    memo?: MemoCreateNestedManyWithoutUserInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => PositionCreateNestedOneWithoutUserInput, {nullable:true})
    position?: PositionCreateNestedOneWithoutUserInput;

    @Field(() => ParticipantCreateNestedManyWithoutUserInput, {nullable:true})
    Participant?: ParticipantCreateNestedManyWithoutUserInput;
}
