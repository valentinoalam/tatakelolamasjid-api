import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmergencyContactCreateManyInput } from './emergency-contact-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEmergencyContactArgs {

    @Field(() => [EmergencyContactCreateManyInput], {nullable:false})
    @Type(() => EmergencyContactCreateManyInput)
    data!: Array<EmergencyContactCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
