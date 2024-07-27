import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
    id = "id",
    sender = "sender",
    title = "title",
    message = "message",
    photoUrl = "photoUrl",
    dtCreated = "dtCreated",
    isReaded = "isReaded",
    sentAt = "sentAt",
    status = "status"
}


registerEnumType(NotificationScalarFieldEnum, { name: 'NotificationScalarFieldEnum', description: undefined })
