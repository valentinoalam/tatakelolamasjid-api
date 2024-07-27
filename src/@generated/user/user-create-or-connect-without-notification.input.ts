import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNotificationInput } from './user-create-without-notification.input';

@InputType()
export class UserCreateOrConnectWithoutNotificationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutNotificationInput, {nullable:false})
    @Type(() => UserCreateWithoutNotificationInput)
    create!: UserCreateWithoutNotificationInput;
}
