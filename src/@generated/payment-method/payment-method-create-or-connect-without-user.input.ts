import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateWithoutUserInput } from './payment-method-create-without-user.input';

@InputType()
export class PaymentMethodCreateOrConnectWithoutUserInput {

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => PaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => PaymentMethodCreateWithoutUserInput, {nullable:false})
    @Type(() => PaymentMethodCreateWithoutUserInput)
    create!: PaymentMethodCreateWithoutUserInput;
}
