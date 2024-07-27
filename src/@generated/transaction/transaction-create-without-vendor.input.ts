import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Int } from '@nestjs/graphql';
import { AccountCreateNestedOneWithoutTransactionInput } from '../account/account-create-nested-one-without-transaction.input';
import { PaymentMethodCreateNestedOneWithoutTransactionInput } from '../payment-method/payment-method-create-nested-one-without-transaction.input';

@InputType()
export class TransactionCreateWithoutVendorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionType, {nullable:false})
    type!: keyof typeof TransactionType;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => Date, {nullable:false})
    dtTrx!: Date | string;

    @Field(() => String, {nullable:false})
    notaUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => String, {nullable:false})
    updatedBy!: string;

    @Field(() => AccountCreateNestedOneWithoutTransactionInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutTransactionInput;

    @Field(() => PaymentMethodCreateNestedOneWithoutTransactionInput, {nullable:false})
    paymentMethod!: PaymentMethodCreateNestedOneWithoutTransactionInput;
}
