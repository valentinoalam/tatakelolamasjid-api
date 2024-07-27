import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateWithoutEventInput } from './ustadz-event-create-without-event.input';

@InputType()
export class UstadzEventCreateOrConnectWithoutEventInput {

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => UstadzEventCreateWithoutEventInput, {nullable:false})
    @Type(() => UstadzEventCreateWithoutEventInput)
    create!: UstadzEventCreateWithoutEventInput;
}
