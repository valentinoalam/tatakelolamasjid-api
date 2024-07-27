import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class PaymentMethodScalarWhereInput {

    @Field(() => [PaymentMethodScalarWhereInput], {nullable:true})
    AND?: Array<PaymentMethodScalarWhereInput>;

    @Field(() => [PaymentMethodScalarWhereInput], {nullable:true})
    OR?: Array<PaymentMethodScalarWhereInput>;

    @Field(() => [PaymentMethodScalarWhereInput], {nullable:true})
    NOT?: Array<PaymentMethodScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    jenis_pembayaran?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
