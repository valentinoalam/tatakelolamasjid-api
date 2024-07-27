import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceUpdateInput } from './trial-balance-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TrialBalanceWhereUniqueInput } from './trial-balance-where-unique.input';

@ArgsType()
export class UpdateOneTrialBalanceArgs {

    @Field(() => TrialBalanceUpdateInput, {nullable:false})
    @Type(() => TrialBalanceUpdateInput)
    data!: TrialBalanceUpdateInput;

    @Field(() => TrialBalanceWhereUniqueInput, {nullable:false})
    @Type(() => TrialBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<TrialBalanceWhereUniqueInput, 'id'>;
}
