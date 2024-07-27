import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { Type } from 'class-transformer';
import { PaymentMethodOrderByWithRelationInput } from './payment-method-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PaymentMethodWhereUniqueInput } from './payment-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentMethodCountAggregateInput } from './payment-method-count-aggregate.input';
import { PaymentMethodMinAggregateInput } from './payment-method-min-aggregate.input';
import { PaymentMethodMaxAggregateInput } from './payment-method-max-aggregate.input';

@ArgsType()
export class PaymentMethodAggregateArgs {

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

    @Field(() => PaymentMethodCountAggregateInput, {nullable:true})
    _count?: PaymentMethodCountAggregateInput;

    @Field(() => PaymentMethodMinAggregateInput, {nullable:true})
    _min?: PaymentMethodMinAggregateInput;

    @Field(() => PaymentMethodMaxAggregateInput, {nullable:true})
    _max?: PaymentMethodMaxAggregateInput;
}
