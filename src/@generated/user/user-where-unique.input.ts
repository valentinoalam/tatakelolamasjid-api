import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { UserNotificationListRelationFilter } from '../user-notification/user-notification-list-relation-filter.input';
import { PaymentMethodListRelationFilter } from '../payment-method/payment-method-list-relation-filter.input';
import { MemoListRelationFilter } from '../memo/memo-list-relation-filter.input';
import { ProfileNullableRelationFilter } from '../profile/profile-nullable-relation-filter.input';
import { PositionNullableRelationFilter } from '../position/position-nullable-relation-filter.input';
import { ParticipantListRelationFilter } from '../participant/participant-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    emailAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    api_token?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    isConfirmed?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => UserNotificationListRelationFilter, {nullable:true})
    notification?: UserNotificationListRelationFilter;

    @Field(() => PaymentMethodListRelationFilter, {nullable:true})
    paymentMethod?: PaymentMethodListRelationFilter;

    @Field(() => MemoListRelationFilter, {nullable:true})
    memo?: MemoListRelationFilter;

    @Field(() => ProfileNullableRelationFilter, {nullable:true})
    profile?: ProfileNullableRelationFilter;

    @Field(() => PositionNullableRelationFilter, {nullable:true})
    position?: PositionNullableRelationFilter;

    @Field(() => ParticipantListRelationFilter, {nullable:true})
    Participant?: ParticipantListRelationFilter;
}
