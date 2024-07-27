import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPaymentMethodInput } from './user-update-without-payment-method.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPaymentMethodInput } from './user-create-without-payment-method.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPaymentMethodInput {

    @Field(() => UserUpdateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentMethodInput)
    update!: UserUpdateWithoutPaymentMethodInput;

    @Field(() => UserCreateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => UserCreateWithoutPaymentMethodInput)
    create!: UserCreateWithoutPaymentMethodInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
