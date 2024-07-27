import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemoCreateWithoutUserInput } from './memo-create-without-user.input';
import { Type } from 'class-transformer';
import { MemoCreateOrConnectWithoutUserInput } from './memo-create-or-connect-without-user.input';
import { MemoUpsertWithWhereUniqueWithoutUserInput } from './memo-upsert-with-where-unique-without-user.input';
import { MemoCreateManyUserInputEnvelope } from './memo-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemoWhereUniqueInput } from './memo-where-unique.input';
import { MemoUpdateWithWhereUniqueWithoutUserInput } from './memo-update-with-where-unique-without-user.input';
import { MemoUpdateManyWithWhereWithoutUserInput } from './memo-update-many-with-where-without-user.input';
import { MemoScalarWhereInput } from './memo-scalar-where.input';

@InputType()
export class MemoUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [MemoCreateWithoutUserInput], {nullable:true})
    @Type(() => MemoCreateWithoutUserInput)
    create?: Array<MemoCreateWithoutUserInput>;

    @Field(() => [MemoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemoCreateOrConnectWithoutUserInput>;

    @Field(() => [MemoUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemoUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MemoUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MemoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemoCreateManyUserInputEnvelope)
    createMany?: MemoCreateManyUserInputEnvelope;

    @Field(() => [MemoWhereUniqueInput], {nullable:true})
    @Type(() => MemoWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MemoWhereUniqueInput, 'id'>>;

    @Field(() => [MemoWhereUniqueInput], {nullable:true})
    @Type(() => MemoWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MemoWhereUniqueInput, 'id'>>;

    @Field(() => [MemoWhereUniqueInput], {nullable:true})
    @Type(() => MemoWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MemoWhereUniqueInput, 'id'>>;

    @Field(() => [MemoWhereUniqueInput], {nullable:true})
    @Type(() => MemoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemoWhereUniqueInput, 'id'>>;

    @Field(() => [MemoUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemoUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MemoUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MemoUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MemoUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MemoUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MemoScalarWhereInput], {nullable:true})
    @Type(() => MemoScalarWhereInput)
    deleteMany?: Array<MemoScalarWhereInput>;
}
