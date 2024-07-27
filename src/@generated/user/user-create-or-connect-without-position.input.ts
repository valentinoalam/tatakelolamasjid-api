import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPositionInput } from './user-create-without-position.input';

@InputType()
export class UserCreateOrConnectWithoutPositionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutPositionInput, {nullable:false})
    @Type(() => UserCreateWithoutPositionInput)
    create!: UserCreateWithoutPositionInput;
}
