import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UstadzEventCountAggregate } from './ustadz-event-count-aggregate.output';
import { UstadzEventMinAggregate } from './ustadz-event-min-aggregate.output';
import { UstadzEventMaxAggregate } from './ustadz-event-max-aggregate.output';

@ObjectType()
export class UstadzEventGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    ustadzId!: string;

    @Field(() => String, {nullable:false})
    eventId!: string;

    @Field(() => UstadzEventCountAggregate, {nullable:true})
    _count?: UstadzEventCountAggregate;

    @Field(() => UstadzEventMinAggregate, {nullable:true})
    _min?: UstadzEventMinAggregate;

    @Field(() => UstadzEventMaxAggregate, {nullable:true})
    _max?: UstadzEventMaxAggregate;
}
