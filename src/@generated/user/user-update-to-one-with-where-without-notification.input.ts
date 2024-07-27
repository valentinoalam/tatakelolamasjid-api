import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutNotificationInput } from './user-update-without-notification.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutNotificationInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => UserUpdateWithoutNotificationInput)
    data!: UserUpdateWithoutNotificationInput;
}
