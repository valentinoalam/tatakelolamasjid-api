import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoScalarWhereInput } from './memo-scalar-where.input';
import { Type } from 'class-transformer';
import { MemoUpdateManyMutationInput } from './memo-update-many-mutation.input';

@InputType()
export class MemoUpdateManyWithWhereWithoutUserInput {

    @Field(() => MemoScalarWhereInput, {nullable:false})
    @Type(() => MemoScalarWhereInput)
    where!: MemoScalarWhereInput;

    @Field(() => MemoUpdateManyMutationInput, {nullable:false})
    @Type(() => MemoUpdateManyMutationInput)
    data!: MemoUpdateManyMutationInput;
}
