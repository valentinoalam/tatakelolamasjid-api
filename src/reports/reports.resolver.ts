import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReportsService } from './reports.service';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';

@Resolver('Report')
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Mutation('createReport')
  create(@Args('createReportInput') createReportInput: CreateReportInput) {
    return this.reportsService.create(createReportInput);
  }

  @Query('reports')
  findAll() {
    return this.reportsService.findAll();
  }

  @Query('report')
  findOne(@Args('id') id: number) {
    return this.reportsService.findOne(id);
  }

  @Mutation('updateReport')
  update(@Args('updateReportInput') updateReportInput: UpdateReportInput) {
    return this.reportsService.update(updateReportInput.id, updateReportInput);
  }

  @Mutation('removeReport')
  remove(@Args('id') id: number) {
    return this.reportsService.remove(id);
  }
}
