import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class TrialBalanceScalarWhereInput {

    @Field(() => [TrialBalanceScalarWhereInput], {nullable:true})
    AND?: Array<TrialBalanceScalarWhereInput>;

    @Field(() => [TrialBalanceScalarWhereInput], {nullable:true})
    OR?: Array<TrialBalanceScalarWhereInput>;

    @Field(() => [TrialBalanceScalarWhereInput], {nullable:true})
    NOT?: Array<TrialBalanceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
