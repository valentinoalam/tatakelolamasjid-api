import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserNotification } from '../user-notification/user-notification.model';
import { PaymentMethod } from '../payment-method/payment-method.model';
import { Memo } from '../memo/memo.model';
import { Profile } from '../profile/profile.model';
import { Position } from '../position/position.model';
import { Participant } from '../participant/participant.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    emailAddress!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    api_token!: string | null;

    @Field(() => String, {nullable:false})
    isConfirmed!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => [UserNotification], {nullable:true})
    notification?: Array<UserNotification>;

    @Field(() => [PaymentMethod], {nullable:true})
    paymentMethod?: Array<PaymentMethod>;

    @Field(() => [Memo], {nullable:true})
    memo?: Array<Memo>;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => Position, {nullable:true})
    position?: Position | null;

    @Field(() => [Participant], {nullable:true})
    Participant?: Array<Participant>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
