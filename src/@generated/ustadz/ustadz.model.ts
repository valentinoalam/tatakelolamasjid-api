import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UstadzEvent } from '../ustadz-event/ustadz-event.model';
import { UstadzCount } from './ustadz-count.output';

@ObjectType()
export class Ustadz {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => [UstadzEvent], {nullable:true})
    attendAs?: Array<UstadzEvent>;

    @Field(() => UstadzCount, {nullable:false})
    _count?: UstadzCount;
}
