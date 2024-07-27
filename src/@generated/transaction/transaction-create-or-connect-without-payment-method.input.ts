import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutPaymentMethodInput } from './transaction-create-without-payment-method.input';

@InputType()
export class TransactionCreateOrConnectWithoutPaymentMethodInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionCreateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => TransactionCreateWithoutPaymentMethodInput)
    create!: TransactionCreateWithoutPaymentMethodInput;
}
