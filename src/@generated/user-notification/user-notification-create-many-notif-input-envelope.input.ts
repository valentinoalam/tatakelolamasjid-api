import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCreateManyNotifInput } from './user-notification-create-many-notif.input';
import { Type } from 'class-transformer';

@InputType()
export class UserNotificationCreateManyNotifInputEnvelope {

    @Field(() => [UserNotificationCreateManyNotifInput], {nullable:false})
    @Type(() => UserNotificationCreateManyNotifInput)
    data!: Array<UserNotificationCreateManyNotifInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
