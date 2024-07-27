import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ParticipantWhereInput } from './participant-where.input';
import { Type } from 'class-transformer';
import { ParticipantOrderByWithRelationInput } from './participant-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ParticipantWhereUniqueInput } from './participant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ParticipantScalarFieldEnum } from './participant-scalar-field.enum';

@ArgsType()
export class FindFirstParticipantOrThrowArgs {

    @Field(() => ParticipantWhereInput, {nullable:true})
    @Type(() => ParticipantWhereInput)
    where?: ParticipantWhereInput;

    @Field(() => [ParticipantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ParticipantOrderByWithRelationInput>;

    @Field(() => ParticipantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'id' | 'userId' | 'userId_eventId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ParticipantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
