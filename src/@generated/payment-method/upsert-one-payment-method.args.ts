import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateInput } from './payment-method-create.input';
import { PaymentMethodUpdateInput } from './payment-method-update.input';

@ArgsType()
export class UpsertOnePaymentMethodArgs {

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => PaymentMethodCreateInput, {nullable:false})
    @Type(() => PaymentMethodCreateInput)
    create!: PaymentMethodCreateInput;

    @Field(() => PaymentMethodUpdateInput, {nullable:false})
    @Type(() => PaymentMethodUpdateInput)
    update!: PaymentMethodUpdateInput;
}
