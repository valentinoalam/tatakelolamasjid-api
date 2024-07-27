import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactUpdateManyMutationInput } from './emergency-contact-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';

@ArgsType()
export class UpdateManyEmergencyContactArgs {

    @Field(() => EmergencyContactUpdateManyMutationInput, {nullable:false})
    @Type(() => EmergencyContactUpdateManyMutationInput)
    data!: EmergencyContactUpdateManyMutationInput;

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;
}
