import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactUpdateInput } from './emergency-contact-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';

@ArgsType()
export class UpdateOneEmergencyContactArgs {

    @Field(() => EmergencyContactUpdateInput, {nullable:false})
    @Type(() => EmergencyContactUpdateInput)
    data!: EmergencyContactUpdateInput;

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:false})
    @Type(() => EmergencyContactWhereUniqueInput)
    where!: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;
}
