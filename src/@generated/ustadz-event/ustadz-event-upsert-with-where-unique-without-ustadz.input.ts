import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzEventUpdateWithoutUstadzInput } from './ustadz-event-update-without-ustadz.input';
import { UstadzEventCreateWithoutUstadzInput } from './ustadz-event-create-without-ustadz.input';

@InputType()
export class UstadzEventUpsertWithWhereUniqueWithoutUstadzInput {

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => UstadzEventUpdateWithoutUstadzInput, {nullable:false})
    @Type(() => UstadzEventUpdateWithoutUstadzInput)
    update!: UstadzEventUpdateWithoutUstadzInput;

    @Field(() => UstadzEventCreateWithoutUstadzInput, {nullable:false})
    @Type(() => UstadzEventCreateWithoutUstadzInput)
    create!: UstadzEventCreateWithoutUstadzInput;
}
