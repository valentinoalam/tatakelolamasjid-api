import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemoInput } from './user-create-without-memo.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemoInput } from './user-create-or-connect-without-memo.input';
import { UserUpsertWithoutMemoInput } from './user-upsert-without-memo.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMemoInput } from './user-update-to-one-with-where-without-memo.input';

@InputType()
export class UserUpdateOneRequiredWithoutMemoNestedInput {

    @Field(() => UserCreateWithoutMemoInput, {nullable:true})
    @Type(() => UserCreateWithoutMemoInput)
    create?: UserCreateWithoutMemoInput;

    @Field(() => UserCreateOrConnectWithoutMemoInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemoInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemoInput;

    @Field(() => UserUpsertWithoutMemoInput, {nullable:true})
    @Type(() => UserUpsertWithoutMemoInput)
    upsert?: UserUpsertWithoutMemoInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMemoInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMemoInput)
    update?: UserUpdateToOneWithWhereWithoutMemoInput;
}
