import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemoUpdateManyMutationInput } from './memo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemoWhereInput } from './memo-where.input';

@ArgsType()
export class UpdateManyMemoArgs {

    @Field(() => MemoUpdateManyMutationInput, {nullable:false})
    @Type(() => MemoUpdateManyMutationInput)
    data!: MemoUpdateManyMutationInput;

    @Field(() => MemoWhereInput, {nullable:true})
    @Type(() => MemoWhereInput)
    where?: MemoWhereInput;
}
