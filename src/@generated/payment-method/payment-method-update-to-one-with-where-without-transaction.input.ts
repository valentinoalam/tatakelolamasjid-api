import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { Type } from 'class-transformer';
import { PaymentMethodUpdateWithoutTransactionInput } from './payment-method-update-without-transaction.input';

@InputType()
export class PaymentMethodUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;

    @Field(() => PaymentMethodUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentMethodUpdateWithoutTransactionInput)
    data!: PaymentMethodUpdateWithoutTransactionInput;
}
