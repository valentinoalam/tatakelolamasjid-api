import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UstadzCountAggregate } from './ustadz-count-aggregate.output';
import { UstadzMinAggregate } from './ustadz-min-aggregate.output';
import { UstadzMaxAggregate } from './ustadz-max-aggregate.output';

@ObjectType()
export class AggregateUstadz {

    @Field(() => UstadzCountAggregate, {nullable:true})
    _count?: UstadzCountAggregate;

    @Field(() => UstadzMinAggregate, {nullable:true})
    _min?: UstadzMinAggregate;

    @Field(() => UstadzMaxAggregate, {nullable:true})
    _max?: UstadzMaxAggregate;
}
