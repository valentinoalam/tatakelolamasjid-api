import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethodCountAggregate } from './payment-method-count-aggregate.output';
import { PaymentMethodMinAggregate } from './payment-method-min-aggregate.output';
import { PaymentMethodMaxAggregate } from './payment-method-max-aggregate.output';

@ObjectType()
export class PaymentMethodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    jenis_pembayaran!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentMethodCountAggregate, {nullable:true})
    _count?: PaymentMethodCountAggregate;

    @Field(() => PaymentMethodMinAggregate, {nullable:true})
    _min?: PaymentMethodMinAggregate;

    @Field(() => PaymentMethodMaxAggregate, {nullable:true})
    _max?: PaymentMethodMaxAggregate;
}
