import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmergencyContactWhereInput } from './emergency-contact-where.input';

@InputType()
export class EmergencyContactRelationFilter {

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    is?: EmergencyContactWhereInput;

    @Field(() => EmergencyContactWhereInput, {nullable:true})
    isNot?: EmergencyContactWhereInput;
}
