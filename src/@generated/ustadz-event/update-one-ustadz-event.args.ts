import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventUpdateInput } from './ustadz-event-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';

@ArgsType()
export class UpdateOneUstadzEventArgs {

    @Field(() => UstadzEventUpdateInput, {nullable:false})
    @Type(() => UstadzEventUpdateInput)
    data!: UstadzEventUpdateInput;

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;
}
