import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemoCountAggregate } from './memo-count-aggregate.output';
import { MemoMinAggregate } from './memo-min-aggregate.output';
import { MemoMaxAggregate } from './memo-max-aggregate.output';

@ObjectType()
export class MemoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Boolean, {nullable:false})
    is_done!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MemoCountAggregate, {nullable:true})
    _count?: MemoCountAggregate;

    @Field(() => MemoMinAggregate, {nullable:true})
    _min?: MemoMinAggregate;

    @Field(() => MemoMaxAggregate, {nullable:true})
    _max?: MemoMaxAggregate;
}
