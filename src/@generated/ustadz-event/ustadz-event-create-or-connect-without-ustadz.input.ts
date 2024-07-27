import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateWithoutUstadzInput } from './ustadz-event-create-without-ustadz.input';

@InputType()
export class UstadzEventCreateOrConnectWithoutUstadzInput {

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => UstadzEventCreateWithoutUstadzInput, {nullable:false})
    @Type(() => UstadzEventCreateWithoutUstadzInput)
    create!: UstadzEventCreateWithoutUstadzInput;
}
