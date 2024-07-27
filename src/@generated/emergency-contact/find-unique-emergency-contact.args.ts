import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEmergencyContactArgs {

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:false})
    @Type(() => EmergencyContactWhereUniqueInput)
    where!: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;
}
