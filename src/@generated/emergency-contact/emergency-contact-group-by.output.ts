import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmergencyContactCountAggregate } from './emergency-contact-count-aggregate.output';
import { EmergencyContactMinAggregate } from './emergency-contact-min-aggregate.output';
import { EmergencyContactMaxAggregate } from './emergency-contact-max-aggregate.output';

@ObjectType()
export class EmergencyContactGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    relationType!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmergencyContactCountAggregate, {nullable:true})
    _count?: EmergencyContactCountAggregate;

    @Field(() => EmergencyContactMinAggregate, {nullable:true})
    _min?: EmergencyContactMinAggregate;

    @Field(() => EmergencyContactMaxAggregate, {nullable:true})
    _max?: EmergencyContactMaxAggregate;
}
