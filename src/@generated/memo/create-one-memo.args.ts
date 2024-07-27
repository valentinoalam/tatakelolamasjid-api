import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoCreateInput } from './memo-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemoArgs {

    @Field(() => MemoCreateInput, {nullable:false})
    @Type(() => MemoCreateInput)
    data!: MemoCreateInput;
}
