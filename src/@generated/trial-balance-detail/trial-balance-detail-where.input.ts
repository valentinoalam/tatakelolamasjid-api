import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { TrialBalanceRelationFilter } from '../trial-balance/trial-balance-relation-filter.input';

@InputType()
export class TrialBalanceDetailWhereInput {

    @Field(() => [TrialBalanceDetailWhereInput], {nullable:true})
    AND?: Array<TrialBalanceDetailWhereInput>;

    @Field(() => [TrialBalanceDetailWhereInput], {nullable:true})
    OR?: Array<TrialBalanceDetailWhereInput>;

    @Field(() => [TrialBalanceDetailWhereInput], {nullable:true})
    NOT?: Array<TrialBalanceDetailWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    trialBalanceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accountId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDebit?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    openingBalance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    closingBalance?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => TrialBalanceRelationFilter, {nullable:true})
    trialBalance?: TrialBalanceRelationFilter;
}
