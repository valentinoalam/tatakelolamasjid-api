import { registerEnumType } from '@nestjs/graphql';

export enum UserNotificationScalarFieldEnum {
    id = "id",
    userId = "userId",
    notification_id = "notification_id"
}


registerEnumType(UserNotificationScalarFieldEnum, { name: 'UserNotificationScalarFieldEnum', description: undefined })
