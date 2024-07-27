import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceWhereInput } from './trial-balance-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTrialBalanceArgs {

    @Field(() => TrialBalanceWhereInput, {nullable:true})
    @Type(() => TrialBalanceWhereInput)
    where?: TrialBalanceWhereInput;
}
