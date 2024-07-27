import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodCreateWithoutUserInput } from './payment-method-create-without-user.input';
import { Type } from 'class-transformer';
import { PaymentMethodCreateOrConnectWithoutUserInput } from './payment-method-create-or-connect-without-user.input';
import { PaymentMethodCreateManyUserInputEnvelope } from './payment-method-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';

@InputType()
export class PaymentMethodUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PaymentMethodCreateWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodCreateWithoutUserInput)
    create?: Array<PaymentMethodCreateWithoutUserInput>;

    @Field(() => [PaymentMethodCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PaymentMethodCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PaymentMethodCreateOrConnectWithoutUserInput>;

    @Field(() => PaymentMethodCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PaymentMethodCreateManyUserInputEnvelope)
    createMany?: PaymentMethodCreateManyUserInputEnvelope;

    @Field(() => [PaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => PaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>>;
}
