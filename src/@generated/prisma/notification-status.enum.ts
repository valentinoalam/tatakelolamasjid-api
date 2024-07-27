import { registerEnumType } from '@nestjs/graphql';

export enum NotificationStatus {
    Pending = "Pending",
    Sent = "Sent",
    Failed = "Failed",
    Delivered = "Delivered"
}


registerEnumType(NotificationStatus, { name: 'NotificationStatus', description: undefined })
