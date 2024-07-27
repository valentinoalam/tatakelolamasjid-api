import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UstadzEventCreateWithoutUstadzInput } from './ustadz-event-create-without-ustadz.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateOrConnectWithoutUstadzInput } from './ustadz-event-create-or-connect-without-ustadz.input';
import { UstadzEventCreateManyUstadzInputEnvelope } from './ustadz-event-create-many-ustadz-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';

@InputType()
export class UstadzEventCreateNestedManyWithoutUstadzInput {

    @Field(() => [UstadzEventCreateWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventCreateWithoutUstadzInput)
    create?: Array<UstadzEventCreateWithoutUstadzInput>;

    @Field(() => [UstadzEventCreateOrConnectWithoutUstadzInput], {nullable:true})
    @Type(() => UstadzEventCreateOrConnectWithoutUstadzInput)
    connectOrCreate?: Array<UstadzEventCreateOrConnectWithoutUstadzInput>;

    @Field(() => UstadzEventCreateManyUstadzInputEnvelope, {nullable:true})
    @Type(() => UstadzEventCreateManyUstadzInputEnvelope)
    createMany?: UstadzEventCreateManyUstadzInputEnvelope;

    @Field(() => [UstadzEventWhereUniqueInput], {nullable:true})
    @Type(() => UstadzEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>>;
}
