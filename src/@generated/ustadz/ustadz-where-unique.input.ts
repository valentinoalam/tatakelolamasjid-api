import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UstadzEventListRelationFilter } from '../ustadz-event/ustadz-event-list-relation-filter.input';

@InputType()
export class UstadzWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [UstadzWhereInput], {nullable:true})
    AND?: Array<UstadzWhereInput>;

    @Field(() => [UstadzWhereInput], {nullable:true})
    OR?: Array<UstadzWhereInput>;

    @Field(() => [UstadzWhereInput], {nullable:true})
    NOT?: Array<UstadzWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => UstadzEventListRelationFilter, {nullable:true})
    attendAs?: UstadzEventListRelationFilter;
}
