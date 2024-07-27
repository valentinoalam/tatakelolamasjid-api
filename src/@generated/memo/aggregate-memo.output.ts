import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemoCountAggregate } from './memo-count-aggregate.output';
import { MemoMinAggregate } from './memo-min-aggregate.output';
import { MemoMaxAggregate } from './memo-max-aggregate.output';

@ObjectType()
export class AggregateMemo {

    @Field(() => MemoCountAggregate, {nullable:true})
    _count?: MemoCountAggregate;

    @Field(() => MemoMinAggregate, {nullable:true})
    _min?: MemoMinAggregate;

    @Field(() => MemoMaxAggregate, {nullable:true})
    _max?: MemoMaxAggregate;
}
