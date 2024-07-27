import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateWithoutTransactionInput } from './payment-method-create-without-transaction.input';

@InputType()
export class PaymentMethodCreateOrConnectWithoutTransactionInput {

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => PaymentMethodCreateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentMethodCreateWithoutTransactionInput)
    create!: PaymentMethodCreateWithoutTransactionInput;
}
