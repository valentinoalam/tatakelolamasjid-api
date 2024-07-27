import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemoInput } from './user-create-without-memo.input';

@InputType()
export class UserCreateOrConnectWithoutMemoInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutMemoInput, {nullable:false})
    @Type(() => UserCreateWithoutMemoInput)
    create!: UserCreateWithoutMemoInput;
}
