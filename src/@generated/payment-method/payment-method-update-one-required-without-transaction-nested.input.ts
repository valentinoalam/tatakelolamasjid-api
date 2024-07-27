import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodCreateWithoutTransactionInput } from './payment-method-create-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateOrConnectWithoutTransactionInput } from './payment-method-create-or-connect-without-transaction.input';
import { PaymentMethodUpsertWithoutTransactionInput } from './payment-method-upsert-without-transaction.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { PaymentMethodUpdateToOneWithWhereWithoutTransactionInput } from './payment-method-update-to-one-with-where-without-transaction.input';

@InputType()
export class PaymentMethodUpdateOneRequiredWithoutTransactionNestedInput {

    @Field(() => PaymentMethodCreateWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodCreateWithoutTransactionInput)
    create?: PaymentMethodCreateWithoutTransactionInput;

    @Field(() => PaymentMethodCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionInput;

    @Field(() => PaymentMethodUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodUpsertWithoutTransactionInput)
    upsert?: PaymentMethodUpsertWithoutTransactionInput;

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => PaymentMethodUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentMethodUpdateToOneWithWhereWithoutTransactionInput)
    update?: PaymentMethodUpdateToOneWithWhereWithoutTransactionInput;
}
