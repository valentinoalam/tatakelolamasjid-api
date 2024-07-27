import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodCreateWithoutTransactionInput } from './payment-method-create-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateOrConnectWithoutTransactionInput } from './payment-method-create-or-connect-without-transaction.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';

@InputType()
export class PaymentMethodCreateNestedOneWithoutTransactionInput {

    @Field(() => PaymentMethodCreateWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodCreateWithoutTransactionInput)
    create?: PaymentMethodCreateWithoutTransactionInput;

    @Field(() => PaymentMethodCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionInput;

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;
}
