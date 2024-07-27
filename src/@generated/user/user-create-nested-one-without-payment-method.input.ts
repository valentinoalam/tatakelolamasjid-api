import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentMethodInput } from './user-create-without-payment-method.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentMethodInput } from './user-create-or-connect-without-payment-method.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPaymentMethodInput {

    @Field(() => UserCreateWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentMethodInput)
    create?: UserCreateWithoutPaymentMethodInput;

    @Field(() => UserCreateOrConnectWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentMethodInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
