import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoCreateManyUserInput } from './memo-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MemoCreateManyUserInputEnvelope {

    @Field(() => [MemoCreateManyUserInput], {nullable:false})
    @Type(() => MemoCreateManyUserInput)
    data!: Array<MemoCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
