import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethodWhereInput } from './payment-method-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class PaymentMethodWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PaymentMethodWhereInput], {nullable:true})
    AND?: Array<PaymentMethodWhereInput>;

    @Field(() => [PaymentMethodWhereInput], {nullable:true})
    OR?: Array<PaymentMethodWhereInput>;

    @Field(() => [PaymentMethodWhereInput], {nullable:true})
    NOT?: Array<PaymentMethodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    jenis_pembayaran?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    Transaction?: TransactionListRelationFilter;
}
