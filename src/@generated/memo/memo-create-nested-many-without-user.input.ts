import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoCreateWithoutUserInput } from './memo-create-without-user.input';
import { Type } from 'class-transformer';
import { MemoCreateOrConnectWithoutUserInput } from './memo-create-or-connect-without-user.input';
import { MemoCreateManyUserInputEnvelope } from './memo-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';

@InputType()
export class MemoCreateNestedManyWithoutUserInput {

    @Field(() => [MemoCreateWithoutUserInput], {nullable:true})
    @Type(() => MemoCreateWithoutUserInput)
    create?: Array<MemoCreateWithoutUserInput>;

    @Field(() => [MemoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemoCreateOrConnectWithoutUserInput>;

    @Field(() => MemoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemoCreateManyUserInputEnvelope)
    createMany?: MemoCreateManyUserInputEnvelope;

    @Field(() => [MemoWhereUniqueInput], {nullable:true})
    @Type(() => MemoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemoWhereUniqueInput, 'id'>>;
}
