import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAccountTypeFilter } from '../prisma/enum-account-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BankAccountNullableRelationFilter } from '../bank-account/bank-account-nullable-relation-filter.input';
import { AccountNullableRelationFilter } from './account-nullable-relation-filter.input';
import { AccountListRelationFilter } from './account-list-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';
import { TrialBalanceDetailListRelationFilter } from '../trial-balance-detail/trial-balance-detail-list-relation-filter.input';

@InputType()
export class AccountWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    bankAccId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentAccountId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumAccountTypeFilter, {nullable:true})
    type?: EnumAccountTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    balance?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BankAccountNullableRelationFilter, {nullable:true})
    bankAcc?: BankAccountNullableRelationFilter;

    @Field(() => AccountNullableRelationFilter, {nullable:true})
    parent?: AccountNullableRelationFilter;

    @Field(() => AccountListRelationFilter, {nullable:true})
    children?: AccountListRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    Transaction?: TransactionListRelationFilter;

    @Field(() => TrialBalanceDetailListRelationFilter, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailListRelationFilter;
}
