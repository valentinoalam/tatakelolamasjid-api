import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzEventWhereInput } from './ustadz-event-where.input';
import { Type } from 'class-transformer';
import { UstadzEventOrderByWithRelationInput } from './ustadz-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UstadzEventWhereUniqueInput } from './ustadz-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UstadzEventCountAggregateInput } from './ustadz-event-count-aggregate.input';
import { UstadzEventMinAggregateInput } from './ustadz-event-min-aggregate.input';
import { UstadzEventMaxAggregateInput } from './ustadz-event-max-aggregate.input';

@ArgsType()
export class UstadzEventAggregateArgs {

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

    @Field(() => UstadzEventCountAggregateInput, {nullable:true})
    _count?: UstadzEventCountAggregateInput;

    @Field(() => UstadzEventMinAggregateInput, {nullable:true})
    _min?: UstadzEventMinAggregateInput;

    @Field(() => UstadzEventMaxAggregateInput, {nullable:true})
    _max?: UstadzEventMaxAggregateInput;
}
