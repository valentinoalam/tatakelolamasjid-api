import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPaymentMethodInput } from './user-create-without-payment-method.input';

@InputType()
export class UserCreateOrConnectWithoutPaymentMethodInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => UserCreateWithoutPaymentMethodInput)
    create!: UserCreateWithoutPaymentMethodInput;
}
