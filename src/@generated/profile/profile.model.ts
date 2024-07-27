import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Participant } from '../participant/participant.model';
import { ProfileCount } from './profile-count.output';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    dtBirth!: Date;

    @Field(() => Boolean, {nullable:false})
    isMan!: boolean;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    domisili!: string | null;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Participant], {nullable:true})
    Participant?: Array<Participant>;

    @Field(() => ProfileCount, {nullable:false})
    _count?: ProfileCount;
}
