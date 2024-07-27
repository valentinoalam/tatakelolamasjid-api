import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPaymentMethodInput } from '../user/user-create-nested-one-without-payment-method.input';

@InputType()
export class PaymentMethodCreateWithoutTransactionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    jenis_pembayaran!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPaymentMethodInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPaymentMethodInput;
}
