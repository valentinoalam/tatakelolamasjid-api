import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzEventUpdateWithoutEventInput } from './ustadz-event-update-without-event.input';

@InputType()
export class UstadzEventUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => UstadzEventUpdateWithoutEventInput, {nullable:false})
    @Type(() => UstadzEventUpdateWithoutEventInput)
    data!: UstadzEventUpdateWithoutEventInput;
}
