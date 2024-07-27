import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaCountAggregate } from './media-count-aggregate.output';
import { MediaMinAggregate } from './media-min-aggregate.output';
import { MediaMaxAggregate } from './media-max-aggregate.output';

@ObjectType()
export class MediaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => MediaCountAggregate, {nullable:true})
    _count?: MediaCountAggregate;

    @Field(() => MediaMinAggregate, {nullable:true})
    _min?: MediaMinAggregate;

    @Field(() => MediaMaxAggregate, {nullable:true})
    _max?: MediaMaxAggregate;
}
