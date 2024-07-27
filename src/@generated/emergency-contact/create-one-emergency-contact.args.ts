import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactCreateInput } from './emergency-contact-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEmergencyContactArgs {

    @Field(() => EmergencyContactCreateInput, {nullable:false})
    @Type(() => EmergencyContactCreateInput)
    data!: EmergencyContactCreateInput;
}
