import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class PaymentMethodScalarWhereWithAggregatesInput {

    @Field(() => [PaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentMethodScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentMethodScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentMethodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    jenis_pembayaran?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
