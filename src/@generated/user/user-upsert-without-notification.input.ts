import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNotificationInput } from './user-update-without-notification.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutNotificationInput {

    @Field(() => UserUpdateWithoutNotificationInput, {nullable:false})
    @Type(() => UserUpdateWithoutNotificationInput)
    update!: UserUpdateWithoutNotificationInput;

    @Field(() => UserCreateWithoutNotificationInput, {nullable:false})
    @Type(() => UserCreateWithoutNotificationInput)
    create!: UserCreateWithoutNotificationInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
