import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationUserIdNotification_idCompoundUniqueInput } from './user-notification-user-id-notification-id-compound-unique.input';
import { UserNotificationWhereInput } from './user-notification-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NotificationRelationFilter } from '../notification/notification-relation-filter.input';

@InputType()
export class UserNotificationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserNotificationUserIdNotification_idCompoundUniqueInput, {nullable:true})
    userId_notification_id?: UserNotificationUserIdNotification_idCompoundUniqueInput;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    AND?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    OR?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    NOT?: Array<UserNotificationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    notification_id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => NotificationRelationFilter, {nullable:true})
    notif?: NotificationRelationFilter;
}
