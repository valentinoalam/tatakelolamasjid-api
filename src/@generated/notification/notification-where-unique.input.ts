import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumNotificationStatusFilter } from '../prisma/enum-notification-status-filter.input';
import { UserNotificationListRelationFilter } from '../user-notification/user-notification-list-relation-filter.input';

@InputType()
export class NotificationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    sender?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photoUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dtCreated?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isReaded?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    sentAt?: DateTimeFilter;

    @Field(() => EnumNotificationStatusFilter, {nullable:true})
    status?: EnumNotificationStatusFilter;

    @Field(() => UserNotificationListRelationFilter, {nullable:true})
    receiver?: UserNotificationListRelationFilter;
}
