import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class EmergencyContactScalarWhereWithAggregatesInput {

    @Field(() => [EmergencyContactScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmergencyContactScalarWhereWithAggregatesInput>;

    @Field(() => [EmergencyContactScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmergencyContactScalarWhereWithAggregatesInput>;

    @Field(() => [EmergencyContactScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmergencyContactScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    relationType?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
