import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';

@InputType()
export class TagRelationFilter {

    @Field(() => TagWhereInput, {nullable:true})
    is?: TagWhereInput;

    @Field(() => TagWhereInput, {nullable:true})
    isNot?: TagWhereInput;
}
