import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LedgerCountAggregate } from './ledger-count-aggregate.output';
import { LedgerMinAggregate } from './ledger-min-aggregate.output';
import { LedgerMaxAggregate } from './ledger-max-aggregate.output';

@ObjectType()
export class AggregateLedger {

    @Field(() => LedgerCountAggregate, {nullable:true})
    _count?: LedgerCountAggregate;

    @Field(() => LedgerMinAggregate, {nullable:true})
    _min?: LedgerMinAggregate;

    @Field(() => LedgerMaxAggregate, {nullable:true})
    _max?: LedgerMaxAggregate;
}
