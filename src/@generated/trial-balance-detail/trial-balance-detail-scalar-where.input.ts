import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class TrialBalanceDetailScalarWhereInput {

    @Field(() => [TrialBalanceDetailScalarWhereInput], {nullable:true})
    AND?: Array<TrialBalanceDetailScalarWhereInput>;

    @Field(() => [TrialBalanceDetailScalarWhereInput], {nullable:true})
    OR?: Array<TrialBalanceDetailScalarWhereInput>;

    @Field(() => [TrialBalanceDetailScalarWhereInput], {nullable:true})
    NOT?: Array<TrialBalanceDetailScalarWhereInput>;

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
}
