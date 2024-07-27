import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNotificationInput } from '../user/user-create-nested-one-without-notification.input';

@InputType()
export class UserNotificationCreateWithoutNotifInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutNotificationInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNotificationInput;
}
