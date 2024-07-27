import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';
import { Type } from 'class-transformer';
import { MemoUpdateWithoutUserInput } from './memo-update-without-user.input';
import { MemoCreateWithoutUserInput } from './memo-create-without-user.input';

@InputType()
export class MemoUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MemoWhereUniqueInput, {nullable:false})
    @Type(() => MemoWhereUniqueInput)
    where!: Prisma.AtLeast<MemoWhereUniqueInput, 'id'>;

    @Field(() => MemoUpdateWithoutUserInput, {nullable:false})
    @Type(() => MemoUpdateWithoutUserInput)
    update!: MemoUpdateWithoutUserInput;

    @Field(() => MemoCreateWithoutUserInput, {nullable:false})
    @Type(() => MemoCreateWithoutUserInput)
    create!: MemoCreateWithoutUserInput;
}
