import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrialBalanceMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    ledgerId?: string;

    @Field(() => Date, {nullable:true})
    periodStart?: Date | string;

    @Field(() => Date, {nullable:true})
    periodEnd?: Date | string;

    @Field(() => Int, {nullable:true})
    totalDebit?: number;

    @Field(() => Int, {nullable:true})
    totalCredit?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
