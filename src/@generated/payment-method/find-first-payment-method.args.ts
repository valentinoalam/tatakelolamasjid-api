import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { Type } from 'class-transformer';
import { PaymentMethodOrderByWithRelationInput } from './payment-method-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentMethodScalarFieldEnum } from './payment-method-scalar-field.enum';

@ArgsType()
export class FindFirstPaymentMethodArgs {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;

    @Field(() => [PaymentMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentMethodOrderByWithRelationInput>;

    @Field(() => PaymentMethodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PaymentMethodWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PaymentMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PaymentMethodScalarFieldEnum>;
}
