import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutEventInput } from './position-create-without-event.input';
import { Type } from 'class-transformer';
import { PositionCreateOrConnectWithoutEventInput } from './position-create-or-connect-without-event.input';
import { PositionUpsertWithWhereUniqueWithoutEventInput } from './position-upsert-with-where-unique-without-event.input';
import { PositionCreateManyEventInputEnvelope } from './position-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithWhereUniqueWithoutEventInput } from './position-update-with-where-unique-without-event.input';
import { PositionUpdateManyWithWhereWithoutEventInput } from './position-update-many-with-where-without-event.input';
import { PositionScalarWhereInput } from './position-scalar-where.input';

@InputType()
export class PositionUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [PositionCreateWithoutEventInput], {nullable:true})
    @Type(() => PositionCreateWithoutEventInput)
    create?: Array<PositionCreateWithoutEventInput>;

    @Field(() => [PositionCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => PositionCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<PositionCreateOrConnectWithoutEventInput>;

    @Field(() => [PositionUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => PositionUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<PositionUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => PositionCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => PositionCreateManyEventInputEnvelope)
    createMany?: PositionCreateManyEventInputEnvelope;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    @Type(() => PositionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PositionWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [PositionUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => PositionUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<PositionUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [PositionUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => PositionUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<PositionUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [PositionScalarWhereInput], {nullable:true})
    @Type(() => PositionScalarWhereInput)
    deleteMany?: Array<PositionScalarWhereInput>;
}
