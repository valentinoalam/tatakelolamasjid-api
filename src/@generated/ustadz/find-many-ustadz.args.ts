import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UstadzWhereInput } from './ustadz-where.input';
import { Type } from 'class-transformer';
import { UstadzOrderByWithRelationInput } from './ustadz-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UstadzWhereUniqueInput } from './ustadz-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UstadzScalarFieldEnum } from './ustadz-scalar-field.enum';

@ArgsType()
export class FindManyUstadzArgs {

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

    @Field(() => [UstadzScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UstadzScalarFieldEnum>;
}
