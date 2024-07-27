import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LedgerCreateManyInput } from './ledger-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLedgerArgs {

    @Field(() => [LedgerCreateManyInput], {nullable:false})
    @Type(() => LedgerCreateManyInput)
    data!: Array<LedgerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
