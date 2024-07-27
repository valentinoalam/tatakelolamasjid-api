import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { Type } from 'class-transformer';
import { PaymentMethodOrderByWithAggregationInput } from './payment-method-order-by-with-aggregation.input';
import { PaymentMethodScalarFieldEnum } from './payment-method-scalar-field.enum';
import { PaymentMethodScalarWhereWithAggregatesInput } from './payment-method-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentMethodCountAggregateInput } from './payment-method-count-aggregate.input';
import { PaymentMethodMinAggregateInput } from './payment-method-min-aggregate.input';
import { PaymentMethodMaxAggregateInput } from './payment-method-max-aggregate.input';

@ArgsType()
export class PaymentMethodGroupByArgs {

    @Field(() => PaymentMethodWhereInput, {nullable:true})
    @Type(() => PaymentMethodWhereInput)
    where?: PaymentMethodWhereInput;

    @Field(() => [PaymentMethodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentMethodOrderByWithAggregationInput>;

    @Field(() => [PaymentMethodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PaymentMethodScalarFieldEnum>;

    @Field(() => PaymentMethodScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentMethodScalarWhereWithAggregatesInput;

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
