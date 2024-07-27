import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPaymentMethodInput } from './user-update-without-payment-method.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPaymentMethodInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentMethodInput)
    data!: UserUpdateWithoutPaymentMethodInput;
}
