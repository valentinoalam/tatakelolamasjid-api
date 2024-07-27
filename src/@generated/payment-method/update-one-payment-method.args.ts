import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodUpdateInput } from './payment-method-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';

@ArgsType()
export class UpdateOnePaymentMethodArgs {

    @Field(() => PaymentMethodUpdateInput, {nullable:false})
    @Type(() => PaymentMethodUpdateInput)
    data!: PaymentMethodUpdateInput;

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;
}
