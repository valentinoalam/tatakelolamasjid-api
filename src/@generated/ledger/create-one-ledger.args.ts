import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerCreateInput } from './ledger-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLedgerArgs {

    @Field(() => LedgerCreateInput, {nullable:false})
    @Type(() => LedgerCreateInput)
    data!: LedgerCreateInput;
}
