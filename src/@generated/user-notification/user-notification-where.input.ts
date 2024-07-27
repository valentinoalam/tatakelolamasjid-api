import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NotificationRelationFilter } from '../notification/notification-relation-filter.input';

@InputType()
export class UserNotificationWhereInput {

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    AND?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    OR?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    NOT?: Array<UserNotificationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    notification_id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => NotificationRelationFilter, {nullable:true})
    notif?: NotificationRelationFilter;
}
