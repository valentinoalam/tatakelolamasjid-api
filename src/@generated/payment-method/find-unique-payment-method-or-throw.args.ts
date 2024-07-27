import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePaymentMethodOrThrowArgs {

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;
}
