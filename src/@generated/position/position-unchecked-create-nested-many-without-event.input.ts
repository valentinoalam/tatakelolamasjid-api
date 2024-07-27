import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutEventInput } from './position-create-without-event.input';
import { Type } from 'class-transformer';
import { PositionCreateOrConnectWithoutEventInput } from './position-create-or-connect-without-event.input';
import { PositionCreateManyEventInputEnvelope } from './position-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@InputType()
export class PositionUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [PositionCreateWithoutEventInput], {nullable:true})
    @Type(() => PositionCreateWithoutEventInput)
    create?: Array<PositionCreateWithoutEventInput>;

    @Field(() => [PositionCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => PositionCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<PositionCreateOrConnectWithoutEventInput>;

    @Field(() => PositionCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => PositionCreateManyEventInputEnvelope)
    createMany?: PositionCreateManyEventInputEnvelope;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>>;
}
