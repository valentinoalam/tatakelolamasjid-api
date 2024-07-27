import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmergencyContactWhereUniqueInput } from './emergency-contact-where-unique.input';
import { Type } from 'class-transformer';
import { EmergencyContactCreateInput } from './emergency-contact-create.input';
import { EmergencyContactUpdateInput } from './emergency-contact-update.input';

@ArgsType()
export class UpsertOneEmergencyContactArgs {

    @Field(() => EmergencyContactWhereUniqueInput, {nullable:false})
    @Type(() => EmergencyContactWhereUniqueInput)
    where!: Prisma.AtLeast<EmergencyContactWhereUniqueInput, 'id'>;

    @Field(() => EmergencyContactCreateInput, {nullable:false})
    @Type(() => EmergencyContactCreateInput)
    create!: EmergencyContactCreateInput;

    @Field(() => EmergencyContactUpdateInput, {nullable:false})
    @Type(() => EmergencyContactUpdateInput)
    update!: EmergencyContactUpdateInput;
}
