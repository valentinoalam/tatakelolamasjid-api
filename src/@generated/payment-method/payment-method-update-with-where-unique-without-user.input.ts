import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentMethodUpdateWithoutUserInput } from './payment-method-update-without-user.input';

@InputType()
export class PaymentMethodUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => PaymentMethodUpdateWithoutUserInput, {nullable:false})
    @Type(() => PaymentMethodUpdateWithoutUserInput)
    data!: PaymentMethodUpdateWithoutUserInput;
}
