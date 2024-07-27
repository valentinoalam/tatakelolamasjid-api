import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodUpdateWithoutTransactionInput } from './payment-method-update-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateWithoutTransactionInput } from './payment-method-create-without-transaction.input';
import { PaymentMethodWhereInput } from './payment-method-where.input';

@InputType()
export class PaymentMethodUpsertWithoutTransactionInput {

    @Field(() => PaymentMethodUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentMethodUpdateWithoutTransactionInput)
    update!: PaymentMethodUpdateWithoutTransactionInput;

    @Field(() => PaymentMethodCreateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentMethodCreateWithoutTransactionInput)
    create!: PaymentMethodCreateWithoutTransactionInput;

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;
}
