import { registerEnumType } from '@nestjs/graphql';

export enum AccountType {
    Asset = "Asset",
    Liability = "Liability",
    Equity = "Equity",
    Income = "Income",
    Expense = "Expense"
}


registerEnumType(AccountType, { name: 'AccountType', description: undefined })
