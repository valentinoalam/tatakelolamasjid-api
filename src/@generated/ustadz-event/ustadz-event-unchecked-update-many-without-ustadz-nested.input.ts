import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateWithoutUstadzInput } from './ustadz-event-create-without-ustadz.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateOrConnectWithoutUstadzInput } from './ustadz-event-create-or-connect-without-ustadz.input';
import { UstadzEventUpsertWithWhereUniqueWithoutUstadzInput } from './ustadz-event-upsert-with-where-unique-without-ustadz.input';
import { UstadzEventCreateManyUstadzInputEnvelope } from './ustadz-event-create-many-ustadz-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { UstadzEventUpdateWithWhereUniqueWithoutUstadzInput } from './ustadz-event-update-with-where-unique-without-ustadz.input';
import { UstadzEventUpdateManyWithWhereWithoutUstadzInput } from './ustadz-event-update-many-with-where-without-ustadz.input';
import { UstadzEventScalarWhereInput } from './ustadz-event-scalar-where.input';

@InputType()
export class UstadzEventUncheckedUpdateManyWithoutUstadzNestedInput {

    @Field(() => [UstadzEventCreateWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventCreateWithoutUstadzInput)
    create?: Array<UstadzEventCreateWithoutUstadzInput>;

    @Field(() => [UstadzEventCreateOrConnectWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventCreateOrConnectWithoutUstadzInput)
    connectOrCreate?: Array<UstadzEventCreateOrConnectWithoutUstadzInput>;

    @Field(() => [UstadzEventUpsertWithWhereUniqueWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventUpsertWithWhereUniqueWithoutUstadzInput)
    upsert?: Array<UstadzEventUpsertWithWhereUniqueWithoutUstadzInput>;

    @Field(() => UstadzEventCreateManyUstadzInputEnvelope, {nullable:true})
    @Type(() => UstadzEventCreateManyUstadzInputEnvelope)
    createMany?: UstadzEventCreateManyUstadzInputEnvelope;

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

    @Field(() => [UstadzEventUpdateWithWhereUniqueWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventUpdateWithWhereUniqueWithoutUstadzInput)
    update?: Array<UstadzEventUpdateWithWhereUniqueWithoutUstadzInput>;

    @Field(() => [UstadzEventUpdateManyWithWhereWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventUpdateManyWithWhereWithoutUstadzInput)
    updateMany?: Array<UstadzEventUpdateManyWithWhereWithoutUstadzInput>;

    @Field(() => [UstadzEventScalarWhereInput], {nullable:true})
    @Type(() => UstadzEventScalarWhereInput)
    deleteMany?: Array<UstadzEventScalarWhereInput>;
}
