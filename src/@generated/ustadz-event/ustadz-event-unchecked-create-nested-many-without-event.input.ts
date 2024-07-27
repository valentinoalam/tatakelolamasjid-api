import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateWithoutEventInput } from './ustadz-event-create-without-event.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateOrConnectWithoutEventInput } from './ustadz-event-create-or-connect-without-event.input';
import { UstadzEventCreateManyEventInputEnvelope } from './ustadz-event-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';

@InputType()
export class UstadzEventUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [UstadzEventCreateWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventCreateWithoutEventInput)
    create?: Array<UstadzEventCreateWithoutEventInput>;

    @Field(() => [UstadzEventCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => UstadzEventCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<UstadzEventCreateOrConnectWithoutEventInput>;

    @Field(() => UstadzEventCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => UstadzEventCreateManyEventInputEnvelope)
    createMany?: UstadzEventCreateManyEventInputEnvelope;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;
}
