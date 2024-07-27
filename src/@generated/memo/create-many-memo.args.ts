import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoCreateManyInput } from './memo-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemoArgs {

    @Field(() => [MemoCreateManyInput], {nullable:false})
    @Type(() => MemoCreateManyInput)
    data!: Array<MemoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
