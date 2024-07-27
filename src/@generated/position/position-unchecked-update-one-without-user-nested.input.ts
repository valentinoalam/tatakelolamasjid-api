import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutUserInput } from './position-create-without-user.input';
import { Type } from 'class-transformer';
import { PositionCreateOrConnectWithoutUserInput } from './position-create-or-connect-without-user.input';
import { PositionUpsertWithoutUserInput } from './position-upsert-without-user.input';
import { PositionWhereInput } from './position-where.input';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateToOneWithWhereWithoutUserInput } from './position-update-to-one-with-where-without-user.input';

@InputType()
export class PositionUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => PositionCreateWithoutUserInput, {nullable:true})
    @Type(() => PositionCreateWithoutUserInput)
    create?: PositionCreateWithoutUserInput;

    @Field(() => PositionCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PositionCreateOrConnectWithoutUserInput)
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput;

    @Field(() => PositionUpsertWithoutUserInput, {nullable:true})
    @Type(() => PositionUpsertWithoutUserInput)
    upsert?: PositionUpsertWithoutUserInput;

    @Field(() => PositionWhereInput, {nullable:true})
    @Type(() => PositionWhereInput)
    disconnect?: PositionWhereInput;

    @Field(() => PositionWhereInput, {nullable:true})
    @Type(() => PositionWhereInput)
    delete?: PositionWhereInput;

    @Field(() => PositionWhereUniqueInput, {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    connect?: Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => PositionUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => PositionUpdateToOneWithWhereWithoutUserInput)
    update?: PositionUpdateToOneWithWhereWithoutUserInput;
}
