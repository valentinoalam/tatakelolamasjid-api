import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { Type } from 'class-transformer';
import { PositionCreateWithoutEventInput } from './position-create-without-event.input';

@InputType()
export class PositionCreateOrConnectWithoutEventInput {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    @Type(() => PositionWhereUniqueInput)
    where!: Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => PositionCreateWithoutEventInput, {nullable:false})
    @Type(() => PositionCreateWithoutEventInput)
    create!: PositionCreateWithoutEventInput;
}
