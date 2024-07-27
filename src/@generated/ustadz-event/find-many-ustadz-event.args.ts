import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventWhereInput } from './ustadz-event-where.input';
import { Type } from 'class-transformer';
import { UstadzEventOrderByWithRelationInput } from './ustadz-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UstadzEventScalarFieldEnum } from './ustadz-event-scalar-field.enum';

@ArgsType()
export class FindManyUstadzEventArgs {

    @Field(() => UstadzEventWhereInput, {nullable:true})
    @Type(() => UstadzEventWhereInput)
    where?: UstadzEventWhereInput;

    @Field(() => [UstadzEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UstadzEventOrderByWithRelationInput>;

    @Field(() => UstadzEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UstadzEventWhereUniqueInput, 'id' | 'ustadzId_eventId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UstadzEventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UstadzEventScalarFieldEnum>;
}
