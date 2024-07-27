import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Period } from '../prisma/period.enum';
import { WeekDay } from '../prisma/week-day.enum';
import { TrialBalanceCreateNestedManyWithoutLedgerInput } from '../trial-balance/trial-balance-create-nested-many-without-ledger.input';

@InputType()
export class LedgerCreateInput {

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

    @Field(() => TrialBalanceCreateNestedManyWithoutLedgerInput, {nullable:true})
    TrialBalance?: TrialBalanceCreateNestedManyWithoutLedgerInput;
}
