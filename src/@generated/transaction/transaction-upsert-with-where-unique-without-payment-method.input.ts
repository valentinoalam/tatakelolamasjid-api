import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutPaymentMethodInput } from './transaction-update-without-payment-method.input';
import { TransactionCreateWithoutPaymentMethodInput } from './transaction-create-without-payment-method.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionUpdateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutPaymentMethodInput)
    update!: TransactionUpdateWithoutPaymentMethodInput;

    @Field(() => TransactionCreateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => TransactionCreateWithoutPaymentMethodInput)
    create!: TransactionCreateWithoutPaymentMethodInput;
}
