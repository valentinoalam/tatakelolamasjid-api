import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Participant } from '../participant/participant.model';
import { EmergencyContactCount } from './emergency-contact-count.output';

@ObjectType()
export class EmergencyContact {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Participant], {nullable:true})
    Participant?: Array<Participant>;

    @Field(() => EmergencyContactCount, {nullable:false})
    _count?: EmergencyContactCount;
}
