import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { VendorRelationFilter } from '../vendor/vendor-relation-filter.input';
import { PaymentMethodRelationFilter } from '../payment-method/payment-method-relation-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accountId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vendorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentMethodId?: StringFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    type?: EnumTransactionTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reference?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dtTrx?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    notaUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updatedBy?: StringFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => VendorRelationFilter, {nullable:true})
    vendor?: VendorRelationFilter;

    @Field(() => PaymentMethodRelationFilter, {nullable:true})
    paymentMethod?: PaymentMethodRelationFilter;
}
