import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateWithoutEventInput } from './ustadz-event-create-without-event.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateOrConnectWithoutEventInput } from './ustadz-event-create-or-connect-without-event.input';
import { UstadzEventUpsertWithWhereUniqueWithoutEventInput } from './ustadz-event-upsert-with-where-unique-without-event.input';
import { UstadzEventCreateManyEventInputEnvelope } from './ustadz-event-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { UstadzEventUpdateWithWhereUniqueWithoutEventInput } from './ustadz-event-update-with-where-unique-without-event.input';
import { UstadzEventUpdateManyWithWhereWithoutEventInput } from './ustadz-event-update-many-with-where-without-event.input';
import { UstadzEventScalarWhereInput } from './ustadz-event-scalar-where.input';

@InputType()
export class UstadzEventUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [UstadzEventCreateWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventCreateWithoutEventInput)
    create?: Array<UstadzEventCreateWithoutEventInput>;

    @Field(() => [UstadzEventCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<UstadzEventCreateOrConnectWithoutEventInput>;

    @Field(() => [UstadzEventUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<UstadzEventUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => UstadzEventCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => UstadzEventCreateManyEventInputEnvelope)
    createMany?: UstadzEventCreateManyEventInputEnvelope;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;

    @Field(() => [UstadzEventUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<UstadzEventUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [UstadzEventUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<UstadzEventUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [UstadzEventScalarWhereInput], {nullable:true})
    @Type(() => UstadzEventScalarWhereInput)
    deleteMany?: Array<UstadzEventScalarWhereInput>;
}
