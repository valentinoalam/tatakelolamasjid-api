import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UstadzEventScalarWhereWithAggregatesInput {

    @Field(() => [UstadzEventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UstadzEventScalarWhereWithAggregatesInput>;

    @Field(() => [UstadzEventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UstadzEventScalarWhereWithAggregatesInput>;

    @Field(() => [UstadzEventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UstadzEventScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ustadzId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    eventId?: StringWithAggregatesFilter;
}
