import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutPaymentMethodInput } from './transaction-update-without-payment-method.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionUpdateWithoutPaymentMethodInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutPaymentMethodInput)
    data!: TransactionUpdateWithoutPaymentMethodInput;
}
