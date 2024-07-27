import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TrialBalanceCreateManyLedgerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    periodStart!: Date | string;

    @Field(() => Date, {nullable:false})
    periodEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    totalDebit!: number;

    @Field(() => Int, {nullable:false})
    totalCredit!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
