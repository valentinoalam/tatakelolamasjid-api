import { Period, WeekDay } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLedgerDto {
  name?: string;
  description?: string;
  @ApiProperty({ enum: Period })
  reportPeriod?: Period;
  @ApiProperty({ enum: WeekDay })
  startWeekDay?: WeekDay;
}