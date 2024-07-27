import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LedgerWhereInput } from './ledger-where.input';

@InputType()
export class LedgerRelationFilter {

    @Field(() => LedgerWhereInput, {nullable:true})
    is?: LedgerWhereInput;

    @Field(() => LedgerWhereInput, {nullable:true})
    isNot?: LedgerWhereInput;
}
