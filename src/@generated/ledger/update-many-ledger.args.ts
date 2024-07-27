import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerUpdateManyMutationInput } from './ledger-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LedgerWhereInput } from './ledger-where.input';

@ArgsType()
export class UpdateManyLedgerArgs {

    @Field(() => LedgerUpdateManyMutationInput, {nullable:false})
    @Type(() => LedgerUpdateManyMutationInput)
    data!: LedgerUpdateManyMutationInput;

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;
}
