import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { Type } from 'class-transformer';
import { PositionUpdateWithoutEventInput } from './position-update-without-event.input';

@InputType()
export class PositionUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    @Type(() => PositionWhereUniqueInput)
    where!: Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => PositionUpdateWithoutEventInput, {nullable:false})
    @Type(() => PositionUpdateWithoutEventInput)
    data!: PositionUpdateWithoutEventInput;
}
