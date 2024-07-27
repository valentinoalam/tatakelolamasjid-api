import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput } from '../transaction/transaction-unchecked-create-nested-many-without-payment-method.input';

@InputType()
export class PaymentMethodUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    jenis_pembayaran!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput, {nullable:true})
    Transaction?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput;
}
