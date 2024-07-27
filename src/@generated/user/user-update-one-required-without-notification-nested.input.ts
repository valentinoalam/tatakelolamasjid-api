import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNotificationInput } from './user-create-or-connect-without-notification.input';
import { UserUpsertWithoutNotificationInput } from './user-upsert-without-notification.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutNotificationInput } from './user-update-to-one-with-where-without-notification.input';

@InputType()
export class UserUpdateOneRequiredWithoutNotificationNestedInput {

    @Field(() => UserCreateWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateWithoutNotificationInput)
    create?: UserCreateWithoutNotificationInput;

    @Field(() => UserCreateOrConnectWithoutNotificationInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNotificationInput)
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput;

    @Field(() => UserUpsertWithoutNotificationInput, {nullable:true})
    @Type(() => UserUpsertWithoutNotificationInput)
    upsert?: UserUpsertWithoutNotificationInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutNotificationInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutNotificationInput)
    update?: UserUpdateToOneWithWhereWithoutNotificationInput;
}
