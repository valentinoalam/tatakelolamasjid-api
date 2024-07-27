import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventUstadzIdEventIdCompoundUniqueInput } from './ustadz-event-ustadz-id-event-id-compound-unique.input';
import { UstadzEventWhereInput } from './ustadz-event-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UstadzRelationFilter } from '../ustadz/ustadz-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';

@InputType()
export class UstadzEventWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UstadzEventUstadzIdEventIdCompoundUniqueInput, {nullable:true})
    ustadzId_eventId?: UstadzEventUstadzIdEventIdCompoundUniqueInput;

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    AND?: Array<UstadzEventWhereInput>;

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    OR?: Array<UstadzEventWhereInput>;

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    NOT?: Array<UstadzEventWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    ustadzId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    eventId?: StringFilter;

    @Field(() => UstadzRelationFilter, {nullable:true})
    Ustadz?: UstadzRelationFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    Event?: EventRelationFilter;
}
