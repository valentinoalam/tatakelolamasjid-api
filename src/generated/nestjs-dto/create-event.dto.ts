
import {Period} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateEventDto {
  name: string;
place: string;
dtStart: Date;
dtEnd: Date;
quota: number;
description: string;
@ApiProperty({ enum: Period})
heldPeriod: Period;
createdBy: string;
}
