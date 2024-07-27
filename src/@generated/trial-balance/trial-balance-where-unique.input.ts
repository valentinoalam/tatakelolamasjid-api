import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { LedgerRelationFilter } from '../ledger/ledger-relation-filter.input';
import { TrialBalanceDetailListRelationFilter } from '../trial-balance-detail/trial-balance-detail-list-relation-filter.input';

@InputType()
export class TrialBalanceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TrialBalanceWhereInput], {nullable:true})
    AND?: Array<TrialBalanceWhereInput>;

    @Field(() => [TrialBalanceWhereInput], {nullable:true})
    OR?: Array<TrialBalanceWhereInput>;

    @Field(() => [TrialBalanceWhereInput], {nullable:true})
    NOT?: Array<TrialBalanceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    ledgerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    periodStart?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    periodEnd?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    totalDebit?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalCredit?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => LedgerRelationFilter, {nullable:true})
    ledger?: LedgerRelationFilter;

    @Field(() => TrialBalanceDetailListRelationFilter, {nullable:true})
    TrialBalanceDetail?: TrialBalanceDetailListRelationFilter;
}
