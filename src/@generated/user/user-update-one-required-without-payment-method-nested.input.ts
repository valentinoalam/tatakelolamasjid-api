import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentMethodInput } from './user-create-without-payment-method.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentMethodInput } from './user-create-or-connect-without-payment-method.input';
import { UserUpsertWithoutPaymentMethodInput } from './user-upsert-without-payment-method.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPaymentMethodInput } from './user-update-to-one-with-where-without-payment-method.input';

@InputType()
export class UserUpdateOneRequiredWithoutPaymentMethodNestedInput {

    @Field(() => UserCreateWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentMethodInput)
    create?: UserCreateWithoutPaymentMethodInput;

    @Field(() => UserCreateOrConnectWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentMethodInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodInput;

    @Field(() => UserUpsertWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserUpsertWithoutPaymentMethodInput)
    upsert?: UserUpsertWithoutPaymentMethodInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPaymentMethodInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPaymentMethodInput)
    update?: UserUpdateToOneWithWhereWithoutPaymentMethodInput;
}
