import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemoInput } from './user-create-without-memo.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemoInput } from './user-create-or-connect-without-memo.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemoInput {

    @Field(() => UserCreateWithoutMemoInput, {nullable:true})
    @Type(() => UserCreateWithoutMemoInput)
    create?: UserCreateWithoutMemoInput;

    @Field(() => UserCreateOrConnectWithoutMemoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemoInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemoInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
