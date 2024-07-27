import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutUserInput } from './position-create-without-user.input';
import { Type } from 'class-transformer';
import { PositionCreateOrConnectWithoutUserInput } from './position-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@InputType()
export class PositionCreateNestedOneWithoutUserInput {

    @Field(() => PositionCreateWithoutUserInput, {nullable:true})
    @Type(() => PositionCreateWithoutUserInput)
    create?: PositionCreateWithoutUserInput;

    @Field(() => PositionCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PositionCreateOrConnectWithoutUserInput)
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput;

    @Field(() => PositionWhereUniqueInput, {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    connect?: Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>;
}
