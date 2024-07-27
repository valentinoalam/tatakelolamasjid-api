import { CreateReportInput } from './create-report.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateReportInput extends PartialType(CreateReportInput) {
  id: number;
}
