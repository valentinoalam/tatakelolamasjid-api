import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { AssetsModule } from './assets/assets.module';
import { MemosModule } from './memos/memos.module';
import { VendorsModule } from './vendors/vendors.module';
import { AccountTransactionsModule } from './account-transactions/account-transactions.module';
import { BookAccountModule } from './book-account/book-account.module';
import { RolesModule } from './roles/roles.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { AssetAcquisitionModule } from './asset-acquisition/asset-acquisition.module';
import { AssetDocumentationModule } from './asset-documentation/asset-documentation.module';
import { JournalModule } from './journal/journal.module';
import { JournalTransactionsModule } from './journal-transactions/journal-transactions.module';
import { EventsModule } from './events/events.module';
import { LedgerModule } from './ledger/ledger.module';
import { ReportsModule } from './reports/reports.module';
import { ExpensesModule } from './expenses/expenses.module';
import { JournalEntryModule } from './journal-entry/journal-entry.module';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [UsersModule, TagsModule, AssetsModule, MemosModule, VendorsModule, AccountTransactionsModule, BookAccountModule, RolesModule, NotificationsModule, PaymentMethodsModule, BankAccountModule, AssetAcquisitionModule, AssetDocumentationModule, JournalModule, JournalTransactionsModule, EventsModule, LedgerModule, ReportsModule, ExpensesModule, JournalEntryModule, IncomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
