import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    dtBirth?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isMan?: boolean;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    domisili?: string;

    @Field(() => String, {nullable:true})
    fullname?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
