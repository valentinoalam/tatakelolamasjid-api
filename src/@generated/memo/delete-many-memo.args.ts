import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoWhereInput } from './memo-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemoArgs {

    @Field(() => MemoWhereInput, {nullable:true})
    @Type(() => MemoWhereInput)
    where?: MemoWhereInput;
}
