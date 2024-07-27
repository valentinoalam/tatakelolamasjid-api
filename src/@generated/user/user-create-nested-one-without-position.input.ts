import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPositionInput } from './user-create-without-position.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPositionInput } from './user-create-or-connect-without-position.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPositionInput {

    @Field(() => UserCreateWithoutPositionInput, {nullable:true})
    @Type(() => UserCreateWithoutPositionInput)
    create?: UserCreateWithoutPositionInput;

    @Field(() => UserCreateOrConnectWithoutPositionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPositionInput)
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
