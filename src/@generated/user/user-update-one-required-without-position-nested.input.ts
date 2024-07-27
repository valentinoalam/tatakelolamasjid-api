import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPositionInput } from './user-create-without-position.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPositionInput } from './user-create-or-connect-without-position.input';
import { UserUpsertWithoutPositionInput } from './user-upsert-without-position.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPositionInput } from './user-update-to-one-with-where-without-position.input';

@InputType()
export class UserUpdateOneRequiredWithoutPositionNestedInput {

    @Field(() => UserCreateWithoutPositionInput, {nullable:true})
    @Type(() => UserCreateWithoutPositionInput)
    create?: UserCreateWithoutPositionInput;

    @Field(() => UserCreateOrConnectWithoutPositionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPositionInput)
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput;

    @Field(() => UserUpsertWithoutPositionInput, {nullable:true})
    @Type(() => UserUpsertWithoutPositionInput)
    upsert?: UserUpsertWithoutPositionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPositionInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPositionInput)
    update?: UserUpdateToOneWithWhereWithoutPositionInput;
}
