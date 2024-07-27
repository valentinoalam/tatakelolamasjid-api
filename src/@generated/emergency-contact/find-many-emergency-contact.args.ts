import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { Type } from 'class-transformer';
import { EmergencyContactOrderByWithRelationInput } from './emergency-contact-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmergencyContactScalarFieldEnum } from './emergency-contact-scalar-field.enum';

@ArgsType()
export class FindManyEmergencyContactArgs {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;

    @Field(() => [EmergencyContactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmergencyContactOrderByWithRelationInput>;

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmergencyContactScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmergencyContactScalarFieldEnum>;
}
