import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethodCountAggregate } from './payment-method-count-aggregate.output';
import { PaymentMethodMinAggregate } from './payment-method-min-aggregate.output';
import { PaymentMethodMaxAggregate } from './payment-method-max-aggregate.output';

@ObjectType()
export class AggregatePaymentMethod {

    @Field(() => PaymentMethodCountAggregate, {nullable:true})
    _count?: PaymentMethodCountAggregate;

    @Field(() => PaymentMethodMinAggregate, {nullable:true})
    _min?: PaymentMethodMinAggregate;

    @Field(() => PaymentMethodMaxAggregate, {nullable:true})
    _max?: PaymentMethodMaxAggregate;
}
