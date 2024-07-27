import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    emailAddress?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    hashedPassword?: string;

    @Field(() => String, {nullable:true})
    api_token?: string;

    @Field(() => String, {nullable:true})
    isConfirmed?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
}
