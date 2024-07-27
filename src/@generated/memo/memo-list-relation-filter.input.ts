import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoWhereInput } from './memo-where.input';

@InputType()
export class MemoListRelationFilter {

    @Field(() => MemoWhereInput, {nullable:true})
    every?: MemoWhereInput;

    @Field(() => MemoWhereInput, {nullable:true})
    some?: MemoWhereInput;

    @Field(() => MemoWhereInput, {nullable:true})
    none?: MemoWhereInput;
}
