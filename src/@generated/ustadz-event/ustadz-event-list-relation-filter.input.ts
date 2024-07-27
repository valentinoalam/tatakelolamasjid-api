import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventWhereInput } from './ustadz-event-where.input';

@InputType()
export class UstadzEventListRelationFilter {

    @Field(() => UstadzEventWhereInput, {nullable:true})
    every?: UstadzEventWhereInput;

    @Field(() => UstadzEventWhereInput, {nullable:true})
    some?: UstadzEventWhereInput;

    @Field(() => UstadzEventWhereInput, {nullable:true})
    none?: UstadzEventWhereInput;
}
