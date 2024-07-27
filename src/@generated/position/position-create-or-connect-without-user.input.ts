import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { Type } from 'class-transformer';
import { PositionCreateWithoutUserInput } from './position-create-without-user.input';

@InputType()
export class PositionCreateOrConnectWithoutUserInput {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    @Type(() => PositionWhereUniqueInput)
    where!: Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => PositionCreateWithoutUserInput, {nullable:false})
    @Type(() => PositionCreateWithoutUserInput)
    create!: PositionCreateWithoutUserInput;
}
