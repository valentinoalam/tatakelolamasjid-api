import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLedgerArgs {

    @Field(() => LedgerWhereInput, {nullable:true})
    @Type(() => LedgerWhereInput)
    where?: LedgerWhereInput;
}
