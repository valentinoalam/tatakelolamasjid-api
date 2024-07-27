import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPaymentMethodInput } from './transaction-create-without-payment-method.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPaymentMethodInput } from './transaction-create-or-connect-without-payment-method.input';
import { TransactionCreateManyPaymentMethodInputEnvelope } from './transaction-create-many-payment-method-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput {

    @Field(() => [TransactionCreateWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionCreateWithoutPaymentMethodInput)
    create?: Array<TransactionCreateWithoutPaymentMethodInput>;

    @Field(() => [TransactionCreateOrConnectWithoutPaymentMethodInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPaymentMethodInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutPaymentMethodInput>;

    @Field(() => TransactionCreateManyPaymentMethodInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyPaymentMethodInputEnvelope)
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
