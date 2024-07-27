import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { WeekDay } from '../prisma/week-day.enum';
import { TrialBalanceUncheckedCreateNestedManyWithoutLedgerInput } from '../trial-balance/trial-balance-unchecked-create-nested-many-without-ledger.input';

@InputType()
export class LedgerUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Period, {nullable:false})
    reportPeriod!: keyof typeof Period;

    @Field(() => WeekDay, {nullable:false})
    startWeekDay!: keyof typeof WeekDay;

    @Field(() => TrialBalanceUncheckedCreateNestedManyWithoutLedgerInput, {nullable:true})
    TrialBalance?: TrialBalanceUncheckedCreateNestedManyWithoutLedgerInput;
}