import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEmergencyContactArgs {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    @Type(() => EmergencyContactWhereInput)
    where?: EmergencyContactWhereInput;
}
