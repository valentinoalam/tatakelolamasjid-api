import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateManyInput } from './trial-balance-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTrialBalanceDetailArgs {

    @Field(() => [TrialBalanceDetailCreateManyInput], {nullable:false})
    @Type(() => TrialBalanceDetailCreateManyInput)
    data!: Array<TrialBalanceDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
