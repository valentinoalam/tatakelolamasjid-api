import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UstadzEventScalarWhereInput {

    @Field(() => [UstadzEventScalarWhereInput], {nullable:true})
    AND?: Array<UstadzEventScalarWhereInput>;

    @Field(() => [UstadzEventScalarWhereInput], {nullable:true})
    OR?: Array<UstadzEventScalarWhereInput>;

    @Field(() => [UstadzEventScalarWhereInput], {nullable:true})
    NOT?: Array<UstadzEventScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ustadzId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    eventId?: StringFilter;
}
