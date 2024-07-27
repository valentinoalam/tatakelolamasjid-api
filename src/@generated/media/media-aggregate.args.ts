import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaOrderByWithRelationInput } from './media-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaCountAggregateInput } from './media-count-aggregate.input';
import { MediaMinAggregateInput } from './media-min-aggregate.input';
import { MediaMaxAggregateInput } from './media-max-aggregate.input';

@ArgsType()
export class MediaAggregateArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MediaCountAggregateInput, {nullable:true})
    _count?: MediaCountAggregateInput;

    @Field(() => MediaMinAggregateInput, {nullable:true})
    _min?: MediaMinAggregateInput;

    @Field(() => MediaMaxAggregateInput, {nullable:true})
    _max?: MediaMaxAggregateInput;
}
