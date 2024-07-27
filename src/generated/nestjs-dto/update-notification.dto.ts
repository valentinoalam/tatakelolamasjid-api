import { NotificationStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNotificationDto {
  sender?: string;
  title?: string;
  message?: string;
  photoUrl?: string;
  sentAt?: Date;
  @ApiProperty({ enum: NotificationStatus })
  status?: NotificationStatus;
}
