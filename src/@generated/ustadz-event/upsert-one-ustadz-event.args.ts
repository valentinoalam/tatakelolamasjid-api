import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Type } from 'class-transformer';
import { UstadzEventCreateInput } from './ustadz-event-create.input';
import { UstadzEventUpdateInput } from './ustadz-event-update.input';

@ArgsType()
export class UpsertOneUstadzEventArgs {

    @Field(() => UstadzEventWhereUniqueInput, {nullable:false})
    @Type(() => UstadzEventWhereUniqueInput)
    where!: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => UstadzEventCreateInput, {nullable:false})
    @Type(() => UstadzEventCreateInput)
    create!: UstadzEventCreateInput;

    @Field(() => UstadzEventUpdateInput, {nullable:false})
    @Type(() => UstadzEventUpdateInput)
    update!: UstadzEventUpdateInput;
}
