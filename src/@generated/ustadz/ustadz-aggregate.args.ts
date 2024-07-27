import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { Type } from 'class-transformer';
import { UstadzOrderByWithRelationInput } from './ustadz-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UstadzCountAggregateInput } from './ustadz-count-aggregate.input';
import { UstadzMinAggregateInput } from './ustadz-min-aggregate.input';
import { UstadzMaxAggregateInput } from './ustadz-max-aggregate.input';

@ArgsType()
export class UstadzAggregateArgs {

    @Field(() => UstadzWhereInput, {nullable:true})
    @Type(() => UstadzWhereInput)
    where?: UstadzWhereInput;

    @Field(() => [UstadzOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UstadzOrderByWithRelationInput>;

    @Field(() => UstadzWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UstadzWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UstadzCountAggregateInput, {nullable:true})
    _count?: UstadzCountAggregateInput;

    @Field(() => UstadzMinAggregateInput, {nullable:true})
    _min?: UstadzMinAggregateInput;

    @Field(() => UstadzMaxAggregateInput, {nullable:true})
    _max?: UstadzMaxAggregateInput;
}
