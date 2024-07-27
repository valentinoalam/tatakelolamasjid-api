import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PaymentMethodCountOrderByAggregateInput } from './payment-method-count-order-by-aggregate.input';
import { PaymentMethodMaxOrderByAggregateInput } from './payment-method-max-order-by-aggregate.input';
import { PaymentMethodMinOrderByAggregateInput } from './payment-method-min-order-by-aggregate.input';

@InputType()
export class PaymentMethodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jenis_pembayaran?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => PaymentMethodCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentMethodCountOrderByAggregateInput;

    @Field(() => PaymentMethodMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentMethodMaxOrderByAggregateInput;

    @Field(() => PaymentMethodMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentMethodMinOrderByAggregateInput;
}
