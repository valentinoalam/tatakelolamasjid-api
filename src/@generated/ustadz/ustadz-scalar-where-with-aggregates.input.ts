import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UstadzScalarWhereWithAggregatesInput {

    @Field(() => [UstadzScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UstadzScalarWhereWithAggregatesInput>;

    @Field(() => [UstadzScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UstadzScalarWhereWithAggregatesInput>;

    @Field(() => [UstadzScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UstadzScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;
}
