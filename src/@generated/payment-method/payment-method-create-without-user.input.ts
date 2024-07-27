import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateNestedManyWithoutPaymentMethodInput } from '../transaction/transaction-create-nested-many-without-payment-method.input';

@InputType()
export class PaymentMethodCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    jenis_pembayaran!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutPaymentMethodInput, {nullable:true})
    Transaction?: TransactionCreateNestedManyWithoutPaymentMethodInput;
}
