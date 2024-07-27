import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrialBalanceDetailCreateManyAccountInput } from './trial-balance-detail-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class TrialBalanceDetailCreateManyAccountInputEnvelope {

    @Field(() => [TrialBalanceDetailCreateManyAccountInput], {nullable:false})
    @Type(() => TrialBalanceDetailCreateManyAccountInput)
    data!: Array<TrialBalanceDetailCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
