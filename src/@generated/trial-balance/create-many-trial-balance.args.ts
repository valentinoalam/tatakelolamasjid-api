import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrialBalanceCreateManyInput } from './trial-balance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTrialBalanceArgs {

    @Field(() => [TrialBalanceCreateManyInput], {nullable:false})
    @Type(() => TrialBalanceCreateManyInput)
    data!: Array<TrialBalanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
