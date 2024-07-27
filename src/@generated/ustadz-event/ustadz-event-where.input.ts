import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UstadzRelationFilter } from '../ustadz/ustadz-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';

@InputType()
export class UstadzEventWhereInput {

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    AND?: Array<UstadzEventWhereInput>;

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    OR?: Array<UstadzEventWhereInput>;

    @Field(() => [UstadzEventWhereInput], {nullable:true})
    NOT?: Array<UstadzEventWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ustadzId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    eventId?: StringFilter;

    @Field(() => UstadzRelationFilter, {nullable:true})
    Ustadz?: UstadzRelationFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    Event?: EventRelationFilter;
}
