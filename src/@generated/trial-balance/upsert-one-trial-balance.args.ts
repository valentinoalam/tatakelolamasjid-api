import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';
import { Type } from 'class-transformer';
import { TrialBalanceCreateInput } from './trial-balance-create.input';
import { TrialBalanceUpdateInput } from './trial-balance-update.input';

@ArgsType()
export class UpsertOneTrialBalanceArgs {

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;

    @Field(() => TrialBalanceCreateInput, {nullable:false})
    @Type(() => TrialBalanceCreateInput)
    create!: TrialBalanceCreateInput;

    @Field(() => TrialBalanceUpdateInput, {nullable:false})
    @Type(() => TrialBalanceUpdateInput)
    update!: TrialBalanceUpdateInput;
}
